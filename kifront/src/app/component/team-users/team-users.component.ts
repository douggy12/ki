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

@Component({
  selector: 'app-team-users',
  templateUrl: './team-users.component.html',
  styleUrls: ['./team-users.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('* => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => *', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class TeamUsersComponent implements OnInit, OnChanges {
  @Input() team: Team;
  selectedUser: User;

  constructor(private avatarService: AvatarService) {
  }

  ngOnInit() {

  }
  // Supprime le pilote de la liste des utilisateurs
  ngOnChanges(changes: SimpleChanges) {
    this.team.ihniTeam.users.filter(user =>user.user.id === this.team.ihniTeam.info.pilote.id)[0].user.pilote = true;
    console.log(this.team);
    

    this.avatarService.getImg(this.team.ihniTeam.info.pilote.id).subscribe(img => {
      this.team.ihniTeam.info.pilote.avatar = this.avatarService.base64toUrl(img.content);
    });
    for (let myUser of this.team.ihniTeam.users) {
      this.avatarService.getImg(myUser.user.id).subscribe(img => {
        myUser.user.avatar = this.avatarService.base64toUrl(img.content);
      });
    }
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
