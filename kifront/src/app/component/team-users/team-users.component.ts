import { TeamService } from './../../service/team.service';
import { User } from './../../class/User';
import { Team } from './../../class/Team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-users',
  templateUrl: './team-users.component.html',
  styleUrls: ['./team-users.component.css']
})
export class TeamUsersComponent implements OnInit {
  @Input() team: Team;
  selectedUser: User;

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
