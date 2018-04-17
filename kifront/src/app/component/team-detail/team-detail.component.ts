import { AuthService } from './../../service/auth.service';
import { TeamService } from './../../service/team.service';
import { Team } from './../../class/Team';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { ContextService } from '../../service/Context.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit, OnChanges {
  @Input() team: Team;
  myId: number;
  isPilote: boolean;

  constructor(
    // private route: ActivatedRoute,
    // private location: Location
    private auth: AuthService,
    private context: ContextService
  ) { }

  ngOnInit(): void {
    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.teamService.getTeam(+params.get('id')))
    // .subscribe(team => this.team = team) ;

  }
  ngOnChanges(): void {
    this.isPilote = this.auth.isPilote(this.context.me, this.team);
  }


}
