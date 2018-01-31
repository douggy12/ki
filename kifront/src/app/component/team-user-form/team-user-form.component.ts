import { KiUser } from './../../class/KiUser';
import { IhniTeam } from './../../class/IhniTeam';
import { AvatarService } from './../../service/avatar.service';
import { Team } from './../../class/Team';
import { UserInfo } from './../../class/UserInfo';
import { UserService } from './../../service/user.service';

import { User } from './../../class/User';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { isNull, isUndefined, isNullOrUndefined } from 'util';
import { Ng2ImgMaxModule } from 'ng2-img-max/dist/src/ng2-img-max.module';
import { Select2OptionData } from 'ng2-select2/ng2-select2.interface';



declare var $: any;


@Component({
  selector: 'app-team-user-form',
  templateUrl: './team-user-form.component.html',
  styleUrls: ['./team-user-form.component.css']
})
export class TeamUserFormComponent implements OnInit, OnChanges {
  @Input() selectedUser: UserInfo;
  @Input() selectedTeam: Team;
  @Input() teams: Team[];
  file: File;
  model: User;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  avatarUrl: String;
  fileChange: Boolean = false;
  exampleData: Array<Select2OptionData>;
  options: Select2Options;
  value: string[];

  constructor(private userService: UserService, private avatarService: AvatarService) {

  }
  onSubmit() {
    // WorkAround Utilise Jquery pour récupérer les data de select 2 (incompatibilité ANgular)
    this.model.kiUser.teamH = $('#teamH').select2('data').map(obj => {
      return obj.id;
    }).join('|');
    this.userService.update(this.model.kiUser).subscribe();
    if (this.fileChange) {
      this.avatarService.uploadImg(this.file, this.selectedUser.id.toString()).subscribe();
      // Met à jour la photo dans l'affichage de team-users
      this.blobToUrl(this.file).subscribe(img => {
        this.selectedTeam.ihniTeam.users.filter(user => user.user.id === this.model.ihniUser.info.id)[0]
          .user.avatar = img;
      });
    }
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
    if (!isNullOrUndefined(this.selectedUser) && !isNullOrUndefined(this.selectedTeam)) {
      this.userService.get(this.selectedUser.id).subscribe(user => {
        this.model = user;
        this.avatarUrl = this.selectedTeam.ihniTeam.users.filter(user => user.user.id === this.model.ihniUser.info.id)[0]
          .user.avatar;
        // Workaround Reinit les valeurs de ancienne Equipe une fois la modal chargée
        setTimeout(() => {
          $('#teamH').val(this.model.kiUser.teamH.split('|')).trigger('change');
        }, 110);
      });
    }


    // Workaround assigner select2 une fois la variable selectedUser attribué
    const select2Timer = Observable.timer(100);
    select2Timer.subscribe(() => {
      $('.multsel').select2();
    });
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
