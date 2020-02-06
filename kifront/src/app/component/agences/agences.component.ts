import { Component, OnInit } from '@angular/core';
import { ContextService } from './../../service/Context.service';
import { TeamInfo } from './../../class/TeamInfo';
import { TeamService } from '../../service/team.service';
import { BuService } from '../../service/bu.service';
import { Team } from '../../class/Team';
import { Bu } from '../../class/Bu';
import { Agence } from '../../class/Agence';
import { SubscriptionCancelService } from '../../service/subscription-cancel.service';
import { cpus } from 'os';

declare var $: any;

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
  bus: Bu[];
  selectedTeam: Team
  selectedBu : Bu;
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
      this.selectedBu = this.selectedAgence.bu;
      this.me = this.context.me;
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
        }
      ));
  }

  /**
   * Callback when an Agence is selected
   * @param agence 
   * @param agenceIndex 
   */
  onSelect(agence: Agence, bu: Bu, agenceIndex: number): void {
    document.body.classList.remove("sidebar-open");
    this.selectedBu = bu;
    this.selectedAgence = agence;
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

}
