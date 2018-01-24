import { AvatarService } from './../../service/avatar.service';
import { Team } from './../../class/Team';
import { UserInfo } from './../../class/UserInfo';
import { UserService } from './../../service/user.service';

import { User } from './../../class/User';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { isNull, isUndefined } from 'util';
import { Ng2ImgMaxModule } from 'ng2-img-max/dist/src/ng2-img-max.module';

declare var $: any;

@Component({
  selector: 'app-team-user-form',
  templateUrl: './team-user-form.component.html',
  styleUrls: ['./team-user-form.component.css']
})
export class TeamUserFormComponent implements OnInit, OnChanges {
  @Input() selectedUser: UserInfo;
  @Input() selectedTeam: Team;
  file: File;
  model: User;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  avatarUrl: String;

  constructor(private userService: UserService, private avatarService: AvatarService) {
  }
  onSubmit() {
    this.userService.update(this.model.kiUser).subscribe();
  }

  ngOnInit() {
  }
  onFileChange(event): void {
    if (event.target.files.length > 0) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.avatarUrl = event.target.result;
      };
      this.avatarService.resizeImg(event.target.files[0]).subscribe(img => {
        // this.file = img;
        reader.readAsDataURL(img);
      });
      this.file = event.target.files[0];
      let formData: FormData = new FormData();
      formData.append('File', this.file, this.file.name);
    }
  }
  previewAvatar() {

  }
  ngOnChanges(): void {
    // this.model = this.selectedUser;
    // console.log(this.selectedUser.ihniUser.info.id);
    if (!isUndefined(this.selectedUser)) {
      this.userService.get(this.selectedUser.id).subscribe(user => {
        this.model = user;
        console.log(this.model);
      });
    }
    // Workaround assigner select2 une fois la variable selectedUser attribué
    const select2 = Observable.timer(100);
    select2.subscribe(() => $('.multsel').select2());
  }
  getRole(): String {

    const idTeamRole = this.model.ihniUser.equipes_role
      .findIndex(key => key.equipe.id === this.selectedTeam.ihniTeam.info.id);
    if (idTeamRole !== -1) {
      return this.model.ihniUser.equipes_role[idTeamRole].role;
    }
    return '';
  }

}
