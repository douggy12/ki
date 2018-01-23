import { TeamService } from './../../service/team.service';
import { User } from './../../class/User';
import { Team } from './../../class/Team';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-team-users',
  templateUrl: './team-users.component.html',
  styleUrls: ['./team-users.component.css']
})
export class TeamUsersComponent implements OnInit, OnChanges {
  @Input()team: Team;
  selectedUser: User;

  constructor() {
  }

  ngOnInit() {
  }
  // Supprime le pilote de la liste des utilisateurs
  ngOnChanges(changes: SimpleChanges) {
    const piloteKey = this.team.ihniTeam.users.findIndex(key => key.id === this.team.ihniTeam.info.pilote.id);
    this.team.ihniTeam.users.splice(piloteKey);
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
