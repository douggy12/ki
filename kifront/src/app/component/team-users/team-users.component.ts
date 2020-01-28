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

    if (!isNullOrUndefined(this.team)) {
      if (!isNullOrUndefined(this.team.ihniTeam.users[0])) {
        this.loadImg(0);
      }
    }
    this.state = true;
  }

  loadImg(id: number) {
    this.subscriptionService.addSubscription(
      this.avatarService.getImg(this.team.ihniTeam.users[id].user.id, 150).subscribe(img => {
        if (!isNullOrUndefined(img.photo)) {
          this.team.ihniTeam.users[id].user.avatar = this.avatarService.base64toUrl(img.photo);
        } else {
          this.team.ihniTeam.users[id].user.avatar = null;
        }
        if (!isNullOrUndefined(this.team.ihniTeam.users[id + 1])) {
          this.loadImg(id + 1);
        }
      })
    );
    // this.onLoadImg();
  }
  // WIP
  // onLoadImg(){
  //   console.log("fini de charger les images");
  //   let divs = document.getElementsByClassName("blue-1");
  //   let numDivs = document.getElementsByClassName("blue-1").length;
  //   for (let i = 0; i < divs.length; i++) {
  //     const element = divs[i];
  //     element.classList.remove("blue-1");
  //     element.classList.add("blue-8");
  //   }
  // }

  onSelect(user: UserInfo): void {
    this.selectedUser = user;
  }
  resetState($event) {
  }

}
