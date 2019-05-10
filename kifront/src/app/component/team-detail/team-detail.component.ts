import { AuthService } from './../../service/auth.service';
import { Team } from './../../class/Team';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ContextService } from '../../service/Context.service';
declare var $: any;
declare function checkSize();

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit, OnChanges {
  @Input() team: Team;
  myId: number;
  isPilote: boolean;
  expanded = false;
  tDescription: String;

  constructor(
    // private route: ActivatedRoute,
    // private location: Location
    private auth: AuthService,
    private context: ContextService
  ) {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.isPilote = this.auth.isPilote(this.context.me, this.team);

    // Si on change d'équipe et que sa description est vide ou absente, on déplie la description pour rendre visible le bouton éditer.
    if (!this.team.kiTeam.description || this.team.kiTeam.description === '') {
      this.expanded = true;
    }
    $(() => {
    // fonction déclarée dans onload.js, ajuste la hauteur des div
    checkSize();
    });
  }
    // Mécanisme pour déplier/replier la description d'une équipe.
  resetExpanded(): void {
    this.expanded = !this.expanded;
    $(() => {
      // fonction déclarée dans onload.js, ajuste la hauteur des div
      checkSize();
      });
  }
    // On affiche la description d'équipe en entier si c'est déplié, sinon, juste le premier paragraphe suivi d'une ellipse.
  setTDescription(text: String): String {
    if (this.expanded) {
      return this.team.kiTeam.description;
    } else if (text != null) {
      return this.team.kiTeam.description.split('</p>')[0] + '..';
    }
  }
}

