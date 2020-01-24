import { Component, OnInit } from '@angular/core';
import { ContextService } from './../../service/Context.service';
import { TeamInfo } from './../../class/TeamInfo';
import { TeamService } from '../../service/team.service';
import { BuService } from '../../service/bu.service';
import { Team } from '../../class/Team';
import { Bu } from '../../class/Bu';
import { Agence } from '../../class/Agence';
import { SubscriptionCancelService } from '../../service/subscription-cancel.service';

declare var $: any;

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
  bus: Bu[];
  selectedTeam: Team
  selectedAgence: Agence;
  teamIndex: number;
  agenceIndex: number;
  //loaded: Boolean;

  teamColor: number[];
  public me;

  constructor(
    private teamService: TeamService,
    private buService: BuService,
    public context: ContextService,
    public subscriptionService: SubscriptionCancelService
  ) { }

  ngOnInit() {
    this.getBus();

    //this.getTeams();
    this.subscriptionService.addSubscription(
    this.teamService.getTeam(+this.context.myTeam).subscribe(teamX => {
      this.selectedAgence = teamX.ihniTeam.info.agence;
      this.me = this.context.me;
      console.log(this.selectedTeam);
    }));

    $(() => {
      $('.content').height($('.tab-content').height());
    });
  }

  // Webservice to get all the Business Units
  getBus(): void {
    this.subscriptionService.addSubscription(
      this.buService.getBus().subscribe(
        bus => {
          this.bus = bus;
          /*this.teams.sort((a, b) => {
            return a.ihniTeam.info.agence.nom.localeCompare(b.ihniTeam.info.agence.nom);
          }
          );
          this.teamIndex = teams.findIndex(team => team.ihniTeam.info.id === +this.context.myTeam);*/
          
        }
      ));
  }

  /**
   * Callback when an Agence is selected
   * @param agence 
   * @param agenceIndex 
   */
  onSelect(agence: Agence, agenceIndex: number): void {
    this.selectedAgence = agence;
    /*if (this.agenceIndex !== agenceIndex) {
      this.selectedAgence = agence;
      this.agenceIndex = agenceIndex;
      this.loaded = true;
    }*/
  }

  /**
   * Callback when an item is selected in the search field (team-seach component)
   * @param teamId the ID of the selected team
   */
  onSubmitedTeam(teamId: number) {
    this.subscriptionService.addSubscription(
      this.teamService.getTeam(teamId)
        .subscribe(
          selectedTeam => {
            this.selectedTeam = selectedTeam; 
            this.selectedAgence = selectedTeam.ihniTeam.info.agence;
            this.teamIndex = teamId;
            this.agenceIndex = selectedTeam.ihniTeam.info.agence.id;
            //this.teamIndex = this.teams.findIndex(team => team.ihniTeam.info.id === teamId);
          }));
  }

  onSelectAgenceFromTeams(agenceId: number){
    console.log("onSelectAgenceFromTeams");
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
