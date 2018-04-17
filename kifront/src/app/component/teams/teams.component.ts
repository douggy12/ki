import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContextService } from './../../service/Context.service';
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
  loaded: Boolean;
  lerror: Boolean;
  state = '';

  constructor(
    private teamService: TeamService,
    private context: ContextService
  ) {
  }

  ngOnInit() {
    this.getTeams();
    this.teamService.getTeam(+this.context.myTeam).subscribe(team => {
      this.selectedTeam = team;
    });
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(
      teams => {
        this.teams = teams;
        this.teamIndex = teams.findIndex(team => team.ihniTeam.info.id === +this.context.myTeam);
        this.loaded = true;
      },
      error => {
        this.lerror = true;
      }
    );
  }

  onSelect(team: Team, teamIndex: number): void {
    if (this.teamIndex !== teamIndex) {
      this.teamService.getTeam(team.ihniTeam.info.id)
        .subscribe(selectedTeam => {

          if (teamIndex > this.teamIndex) {
            this.state = 'down';
          } else {
            this.state = 'up';
          }
          this.selectedTeam = selectedTeam;
          this.teamIndex = teamIndex;
        }
        );
    }
  }
  onSubmitedTeam(subTeam: TeamInfo) {
    this.teamService.getTeam(subTeam.id)
      .subscribe(
        selectedTeam => {
          this.selectedTeam = selectedTeam; this.teamIndex = this.teams.findIndex(team => team.ihniTeam.info.id === subTeam.id);
        });
  }

}
