import { TeamService } from './../../service/team.service';
import { Team } from './../../class/Team';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;
  myId: number;

  constructor(
    private teamService: TeamService,
    // private route: ActivatedRoute,
    // private location: Location
  ) { }

  save(): void {
    this.teamService.update(this.team);
  }

  ngOnInit(): void {
    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.teamService.getTeam(+params.get('id')))
    // .subscribe(team => this.team = team) ;
  }


}
