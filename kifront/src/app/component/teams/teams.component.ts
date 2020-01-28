
import { ContextService } from './../../service/Context.service';
import { TeamInfo } from './../../class/TeamInfo';
import { TeamService } from '../../service/team.service';
import { Team } from '../../class/Team';
import { Agence } from '../../class/Agence';
import { Component, OnInit, Input, Output , EventEmitter,  OnChanges, SimpleChange } from '@angular/core';
import { SubscriptionCancelService } from '../../service/subscription-cancel.service';

declare var $: any;

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, OnChanges {
  teams: Team[];
  @Input() selectedTeam: Team;
  @Input() selectedAgence: Agence;
  agenceIndex: number;
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
    }));
    $(() => {
      $('.content').height($('.tab-content').height());
    });
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {  

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
          let teamIndex = teams.findIndex(team => team.ihniTeam.info.id === +this.context.myTeam);
          this.selectedAgence = teams[teamIndex].ihniTeam.info.agence
        }
      ));
  }

  onSelect(team: Team, teamIndex: number): void {
    this.loaded = false;
    this.subscriptionService.cancelSubscriptions();
    this.subscriptionService.addSubscription(
    this.teamService.getTeam(team.ihniTeam.info.id).subscribe(selectedTeam => {
      this.selectedTeam = selectedTeam;
      this.loaded = true;
    }));
  }
  onSelectTeam(teamId: number){

    this.loaded = false;
      this.subscriptionService.cancelSubscriptions();
      this.subscriptionService.addSubscription(
      this.teamService.getTeam(teamId)
      .subscribe(selectedTeam => {

        this.selectedTeam = selectedTeam;
        this.loaded = true;
      }
      ));
  }
  onAlert(i : string){
    console.log(i);
  }
  onSubmitedTeam(subTeam: TeamInfo) {
    this.subscriptionService.addSubscription(
      this.teamService.getTeam(subTeam.id)
        .subscribe(
          selectedTeam => {
            this.selectedTeam = selectedTeam; 
          }));
  }

}
