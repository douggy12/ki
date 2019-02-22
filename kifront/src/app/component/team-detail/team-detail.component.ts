import { AuthService } from './../../service/auth.service';
import { TeamService } from './../../service/team.service';
import { Team } from './../../class/Team';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';
import { ContextService } from '../../service/Context.service';
import { HostListener } from "@angular/core";
declare var $: any;

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit, OnChanges {
  @Input() team: Team;
  myId: number;
  isPilote: boolean;
  expanded: boolean = false;
  tDescription : String;
  scrHeight:any;
  sidebarHeight:any;
  wrapperHeight:any;
  contentHeight:any;
  
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
    }

  constructor(
    // private route: ActivatedRoute,
    // private location: Location
    private auth: AuthService,
    private context: ContextService
  ) {
    this.getScreenSize();
   }

  ngOnInit(): void {
    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.teamService.getTeam(+params.get('id')))
    // .subscribe(team => this.team = team);
  }
  
  ngOnChanges(): void {
    this.isPilote = this.auth.isPilote(this.context.me, this.team);
    $(() => {
        $('.content-header').height($('.info-equipe').height() + 1);
        this.sidebarHeight = $('.content-wrapper').height() + $('.sidebar-menu').height() ;
        $('.sidebar').height(this.sidebarHeight);
        $('.sidebar').css('max-height', this.sidebarHeight);
    }); 
  }

  resetExpanded(): void{
    this.expanded = !this.expanded;
  }

  setTDescription(text: String): String {
    if(this.expanded){
      return this.team.kiTeam.description;
    }else if (text != null){
      return this.team.kiTeam.description.split('</p>')[0] + '..';
    }else{
      return '';
    }
  }
}

