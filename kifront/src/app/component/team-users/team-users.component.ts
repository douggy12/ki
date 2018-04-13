import { UserInfo } from './../../class/UserInfo';
import { TeamUserFormComponent } from './../team-user-form/team-user-form.component';
import { tap } from 'rxjs/operators';
import { AvatarService } from './../../service/avatar.service';
import { TeamService } from './../../service/team.service';
import { User } from './../../class/User';
import { Team } from './../../class/Team';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { isNullOrUndefined } from 'util';
import { ViewChild } from '@angular/core/src/metadata/di';

declare var $: any;

@Component({
  selector: 'app-team-users',
  templateUrl: './team-users.component.html',
  styleUrls: ['./team-users.component.css'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ transform: 'translateX(0)' })),
  //     transition('* => *', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate(100)
  //     ]),
  //     transition('* => *', [
  //       animate(100, style({ transform: 'translateX(100%)' }))
  //     ])
  //   ])
  // ]
})
export class TeamUsersComponent implements OnInit, OnChanges {
  @Input() team: Team;
  @Input() teams: Team[];
  selectedUser: UserInfo;

  constructor(private avatarService: AvatarService) {
  }

  ngOnInit() {

  }
  // Supprime le pilote de la liste des utilisateurs
  ngOnChanges(changes: SimpleChanges) {

    if (!isNullOrUndefined(this.team)) {
      this.team.ihniTeam.users.filter(user => user.user.id === this.team.ihniTeam.info.pilote.id)[0].user.pilote = true;
      this.avatarService.getImg(this.team.ihniTeam.info.pilote.id).subscribe(img => {
        this.team.ihniTeam.info.pilote.avatar = this.avatarService.base64toUrl(img.content);
      });
      for (const myUser of this.team.ihniTeam.users) {
        this.avatarService.getImg(myUser.user.id).subscribe(img => {
          myUser.user.avatar = this.avatarService.base64toUrl(img.content);
        });
      }
      // Select le premier user de la liste par default pour la modal
      this.selectedUser = this.team.ihniTeam.users[0].user;
    }
  }
  onSelect(user: UserInfo): void {
    this.selectedUser = user;
  }

}
