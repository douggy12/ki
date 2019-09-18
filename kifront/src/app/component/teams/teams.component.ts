import { environment } from './../../../environments/environment';
import { ContextService } from './../../service/Context.service';
import { TeamInfo } from './../../class/TeamInfo';
import { TeamService } from '../../service/team.service';
import { Team } from '../../class/Team';
import { Component, OnInit } from '@angular/core';
declare function initQubHeader(appNom, qubAdress, kiAdress): any;
declare var $: any;


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
  state: Boolean = true;
  teamColor: number[];
  public me;

  constructor(
    private teamService: TeamService,
    public context: ContextService
  ) { }

  ngOnInit() {
    this.getTeams();
    this.teamService.getTeam(+this.context.myTeam).subscribe(teamX => {
      this.selectedTeam = teamX;

      this.me = this.context.me;

      // Données dures à remplacer par les données envoyées dans le POST
      const appNom = 'Ki';
      const teamId = this.selectedTeam.ihniTeam.info.id;
      const qubAdress = environment.ihniUrl;
      const kiAdress = environment.kibackUrl;

      initQubHeader(appNom, qubAdress, kiAdress);
      // this.initTeamColor();
    });
    $(() => {
      $('.content').height($('.tab-content').height());
    });
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(
      teams => {
        this.teams = teams;
        this.teams.sort((a, b) => {
            return a.ihniTeam.info.agence.nom.localeCompare(b.ihniTeam.info.agence.nom);
        }
        );
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
      this.state = false;
      this.teamService.getTeam(team.ihniTeam.info.id)
        .subscribe(selectedTeam => {
          this.state = true;
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
  // WIP
  // initTeamColor() {
  //   let tri = '';
  //   let n = 1;
  //   // tslint:disable-next-line:forin
  //   for (let i in this.teams) {
  //     if (this.teams[i].ihniTeam.info.name.substr(0, 3) !== tri) {
  //       tri = this.teams[i].ihniTeam.info.name.substr(0, 3);
  //       n++;
  //     }
  //     this.teamColor.push(n);
  //   }
  //   console.log(this.teamColor);
  // }

}
