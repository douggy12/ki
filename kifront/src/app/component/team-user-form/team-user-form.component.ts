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
  fileChange: Boolean = false;

  constructor(private userService: UserService, private avatarService: AvatarService) {
  }
  onSubmit() {
    this.userService.update(this.model.kiUser).subscribe();
    if (this.fileChange) {
      this.avatarService.uploadImg(this.file, this.selectedUser.id.toString()).subscribe();
    }

    this.blobToUrl(this.file).subscribe(img => {
      this.selectedTeam.ihniTeam.users.filter(user => user.user.id === this.model.ihniUser.info.id)[0]
        .user.avatar = img;
    });
  }

  ngOnInit() {

  }
  // Transforme un flux Blob en base64 en url image
  blobToUrl(data) {
    const reader = new FileReader();
    let fileObs = Observable.create((observer: any) => {
      reader.onload = (event: any) => {
        let file = event.target.result;
        observer.next(file);
        observer.complete();
      };
    });
    reader.readAsDataURL(data);
    return fileObs;
  }
  onFileChange(event): void {

    if (event.target.files.length > 0) {
      this.avatarService.resizeImg(event.target.files[0]).subscribe(data => {
        this.file = data;
        this.blobToUrl(data).subscribe(img => {

          this.avatarUrl = img;
          this.fileChange = true;
        });
      });
    }
  }

  ngOnChanges(): void {

    if (!isUndefined(this.selectedUser)) {
      this.userService.get(this.selectedUser.id).subscribe(user => {
        this.model = user;
        this.avatarUrl = this.selectedTeam.ihniTeam.users.filter(user => user.user.id === this.model.ihniUser.info.id)[0]
        .user.avatar
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
