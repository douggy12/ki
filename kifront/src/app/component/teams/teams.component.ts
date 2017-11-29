import { TeamService } from './../../service/team.service';
import { Team } from './../../class/Team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[];
  selectedTeam: Team;
  teamIndex: number;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().then(teams => {this.teams = teams; this.teamIndex = 0 ; this.selectedTeam = teams[this.teamIndex]; } );
  }

  onSelect(team: Team, teamIndex: number): void {
    this.selectedTeam = team;
    this.teamIndex = teamIndex;
  }

}
