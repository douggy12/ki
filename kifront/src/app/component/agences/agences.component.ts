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

  selectedAgence: Agence;
  agenceIndex: number;
  loaded: Boolean;

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
    /*this.subscriptionService.addSubscription(
    this.teamService.getTeam(+this.context.myTeam).subscribe(teamX => {
      this.selectedTeam = teamX;
      this.loaded = true;
      this.me = this.context.me;
      // this.initTeamColor();
    }));*/

    $(() => {
      $('.content').height($('.tab-content').height());
    });
  }

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

  onSelect(agence: Agence, agenceIndex: number): void {
    this.loaded = false;
    if (this.agenceIndex !== agenceIndex) {
      this.selectedAgence = agence;
      this.agenceIndex = agenceIndex;
      this.loaded = true;

    }
  }
  onSubmitedTeam(teamId: number) {
    this.subscriptionService.addSubscription(
      this.teamService.getTeam(teamId)
        .subscribe(
          selectedTeam => {
            //this.selectedTeam = selectedTeam; 
            //this.teamIndex = this.teams.findIndex(team => team.ihniTeam.info.id === teamId);
            console.log("coucou");
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
