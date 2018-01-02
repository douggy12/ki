
import { User } from '../../class/User';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import {Team} from "../../class/Team";
import {TeamService} from "../../service/team.service";

declare var $: any;

@Component({
  selector: 'app-team-user-form',
  templateUrl: './team-user-form.component.html',
  styleUrls: ['./team-user-form.component.css']
})
export class TeamUserFormComponent implements OnInit {
  @Input() selectedUser: User;
  model: User;
  submitted = false;
  nbchoices = ['', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  teams: Team[];

  onSubmit() {
    this.submitted = true;
  }
  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.teamService.getTeams().then(teams => this.teams = teams );
  }
  ngOnChanges() {
    this.model = this.selectedUser ;
    // Workaround assigner select2 une fois la variable selectedUser attribué
    const select2 = Observable.timer(100);
    select2.subscribe(() => $('.multsel').select2());
    // console.log(this.selectedUser);
  }

}
