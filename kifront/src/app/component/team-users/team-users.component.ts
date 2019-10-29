import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { isNullOrUndefined } from 'util';
import { Team } from './../../class/Team';
import { UserInfo } from './../../class/UserInfo';
import { AvatarService } from './../../service/avatar.service';
import { Subscription } from 'rxjs';


declare var $: any;

@Component({
  selector: 'app-team-users',
  templateUrl: './team-users.component.html',
  styleUrls: ['./team-users.component.css'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        animate(120, keyframes([
          style({ transform: 'translateY(500px)', opacity: 0, offset: 0 }),
          style({ transform: 'translateY(0)', opacity: 1, offset: 1 })
        ])
        )
      ]),
      transition('* => void', [
        animate(120, style({ transform: 'translateY(-500px)', opacity: 0 })
        )
      ])
    ])
  ],
})
export class TeamUsersComponent implements OnInit, OnChanges {
  @Input() team: Team;
  @Input() teams: Team[];
  @Input() direction: string;
  // conditionne l'apparition du composant depuis appel du parent
  @Input() state: Boolean;
  selectedUser: UserInfo;

  private subscriptions: Array<Subscription> = [];

  constructor(private avatarService: AvatarService) {

  }

  ngOnInit() {
  }
  // Supprime le pilote de la liste des utilisateurs
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());

    this.subscriptions = [];


    if (!isNullOrUndefined(this.team)) {
      for (const myUser of this.team.ihniTeam.users) {
        this.subscriptions.push(
          this.avatarService.getImg(myUser.user.id).subscribe(img => {
            myUser.user.avatar = this.avatarService.base64toUrl(img.content);
          }));
      }
    }
  }
  onSelect(user: UserInfo): void {
    this.selectedUser = user;
  }
  resetState($event) {
  }

}
