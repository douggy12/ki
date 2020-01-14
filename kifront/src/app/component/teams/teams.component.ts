
import { ContextService } from './../../service/Context.service';
import { TeamInfo } from './../../class/TeamInfo';
import { TeamService } from '../../service/team.service';
import { Team } from '../../class/Team';
import { Agence } from '../../class/Agence';
import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionCancelService } from '../../service/subscription-cancel.service';

declare var $: any;

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[];
  selectedTeam: Team;
  @Input() selectedAgence: Agence;
  teamIndex: number;
  loaded: Boolean;

  teamColor: number[];
  public me;

  constructor(
    private teamService: TeamService,
    public context: ContextService,
    public subscriptionService: SubscriptionCancelService
  ) { }

  ngOnInit() {
    this.getTeams();
    this.subscriptionService.addSubscription(
    this.teamService.getTeam(+this.context.myTeam).subscribe(teamX => {
      this.selectedTeam = teamX;
      this.loaded = true;
      this.me = this.context.me;
      // this.initTeamColor();
    }));
    $(() => {
      $('.content').height($('.tab-content').height());
    });
  }

  getTeams(): void {
    this.subscriptionService.addSubscription(
      this.teamService.getTeams().subscribe(
        teams => {
          this.teams = teams;
          this.teams.sort((a, b) => {
            return a.ihniTeam.info.agence.nom.localeCompare(b.ihniTeam.info.agence.nom);
          }
          );
          this.teamIndex = teams.findIndex(team => team.ihniTeam.info.id === +this.context.myTeam);
        }
      ));
  }

  onSelect(team: Team, teamIndex: number): void {
    this.loaded = false;
    if (this.teamIndex !== teamIndex) {
      this.subscriptionService.cancelSubscriptions();
      this.subscriptionService.addSubscription(
        this.teamService.getTeam(team.ihniTeam.info.id)
          .subscribe(selectedTeam => {

            this.selectedTeam = selectedTeam;
            this.teamIndex = teamIndex;
            this.loaded = true;
          }
          ));
    }
  }
  onSubmitedTeam(subTeam: TeamInfo) {
    this.subscriptionService.addSubscription(
      this.teamService.getTeam(subTeam.id)
        .subscribe(
          selectedTeam => {
            this.selectedTeam = selectedTeam; this.teamIndex = this.teams.findIndex(team => team.ihniTeam.info.id === subTeam.id);
          }));
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
