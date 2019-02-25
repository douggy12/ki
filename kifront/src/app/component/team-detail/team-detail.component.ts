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
  sidebarHeight:any;
  
  constructor(
    // private route: ActivatedRoute,
    // private location: Location
    private auth: AuthService,
    private context: ContextService
  ) {}

  ngOnInit(): void {
    console.log('tert');
    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.teamService.getTeam(+params.get('id')))
    // .subscribe(team => this.team = team);
    
  }
  
  ngOnChanges(): void {
    this.isPilote = this.auth.isPilote(this.context.me, this.team);
    $(() => {
        $('.content-header').height($('.info-equipe').height() + 1);
    // On adapte la hauteur et la hauteur maximale (pour faire apparaître un scroll vertical si besoin) de la liste d'équipe en fonction du contenu de la page.
        this.sidebarHeight = $('.content-wrapper').height() + $('.sidebar-menu').height() ;
        $('.sidebar').height(this.sidebarHeight);
        $('.sidebar').css('max-height', this.sidebarHeight);
    }); 
    // Si on change d'équipe et que sa description est vide ou absente, on déplie la description pour rendre visible le bouton éditer.
    if(!this.team.kiTeam.description || this.team.kiTeam.description == ''){ 
      this.expanded = true;
    }
  }
    // Mécanisme pour déplier/replier la description d'une équipe.
  resetExpanded(): void{
    this.expanded = !this.expanded;
  }
    // On affiche la description d'équipe en entier si c'est déplié, sinon, juste le premier paragraphe suivi d'une ellipse.
  setTDescription(text: String): String {
    if(this.expanded){
      return this.team.kiTeam.description;
    }else if (text != null){
      return this.team.kiTeam.description.split('</p>')[0] + '..';
    }
  }
}

