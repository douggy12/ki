import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { isNullOrUndefined } from 'util';
import { Team } from './../../class/Team';
import { UserInfo } from './../../class/UserInfo';
import { AvatarService } from './../../service/avatar.service';
import { Subscription } from 'rxjs';
import { SubscriptionCancelService } from '../../service/subscription-cancel.service';


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
  selectedUser: UserInfo;
  public state = false;

  constructor(private avatarService: AvatarService, private subscriptionService: SubscriptionCancelService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.state = false;
    console.log(changes);

    if (!isNullOrUndefined(this.team)) {
      for (const myUser of this.team.ihniTeam.users) {
        this.subscriptionService.addSubscription(
          this.avatarService.getImg(myUser.user.id).subscribe(img => {
            myUser.user.avatar = this.avatarService.base64toUrl(img.content);
          }));
      }
      this.state = true;
    }
  }
  onSelect(user: UserInfo): void {
    this.selectedUser = user;
  }
  resetState($event) {
  }

}
