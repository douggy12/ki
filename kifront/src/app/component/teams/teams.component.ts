import { TeamInfo } from './../../class/TeamInfo';
import { TeamService } from '../../service/team.service';
import { Team } from '../../class/Team';
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
    this.teamService.getTeams().subscribe(teams => {this.teams = teams; this.teamIndex = 0 ; this.onSelect(teams[0], 0); });
  }

  onSelect(team: Team, teamIndex: number): void {
    this.teamService.getTeam(team.ihniTeam.info.id)
    .subscribe(selectedTeam => {this.selectedTeam = selectedTeam; this.teamIndex = teamIndex; });
  }
  onSubmitedTeam(subTeam: TeamInfo) {
    this.teamService.getTeam(subTeam.id)
    .subscribe(
      selectedTeam => {
        this.selectedTeam = selectedTeam; this.teamIndex = this.teams.findIndex(team => team.ihniTeam.info.id === subTeam.id);
      });
    console.log('received');
  }

}
