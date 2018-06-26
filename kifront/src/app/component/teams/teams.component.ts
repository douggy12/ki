import { environment } from './../../../environments/environment';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContextService } from './../../service/Context.service';
import { TeamInfo } from './../../class/TeamInfo';
import { TeamService } from '../../service/team.service';
import { Team } from '../../class/Team';
import { Component, OnInit } from '@angular/core';
declare function  initQubHeader(appNom, user, userId, admin, team, teamId, role, apiKey, qubAdress, kiAdress): any;


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

  constructor(
    private teamService: TeamService,
    private context: ContextService
  ) { }

  ngOnInit() {
    this.getTeams();
    this.teamService.getTeam(+this.context.myTeam).subscribe(teamX => {
      this.selectedTeam = teamX;

      const me = this.context.me;

      // Données dures à remplacer par les données envoyées dans le POST
      const appNom = 'Ki';
      const user = me.prenom + ' ' + me.nom;
      const userId = me.id;
      const admin = me.admin;
      const team = this.selectedTeam.ihniTeam.info.name;
      const teamId = this.selectedTeam.ihniTeam.info.id;
      const role = me.jobName;
      const apiKey = '86834038aa3d';
      const qubAdress = environment.ihniUrl;
      const kiAdress = environment.kibackUrl;

      initQubHeader(appNom, user, userId, admin, team, teamId, role, apiKey, qubAdress, kiAdress);
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

}
