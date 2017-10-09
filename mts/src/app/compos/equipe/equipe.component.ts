import { Component, OnInit } from '@angular/core';
import {Equipe} from '../../interfaces/Equipe';
import {Fiche} from '../../interfaces/Fiche';
import {Router, ActivatedRoute} from '@angular/router';
import {SrvEquipeService} from '../../services/srv-equipe.service';
import {SrvFicheService} from '../../services/srv-fiche.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  equipes: Equipe[];

  constructor(private route: ActivatedRoute, private equipeSrv: SrvEquipeService, private ficheSrv: SrvFicheService) { }

  ngOnInit() {
    this.equipeSrv.getEquipes().subscribe(equipes => this.equipes = equipes);
    console.log(" equipes : " + this.equipes);
  }

  getFiches(id: number){
    console.log(' liste des fiches demandée.... pour l id :'+id );
    //return this.ficheSrv.getFicheByEquipeId(id);
   // return this.ficheSrv.getFicheByEquipeId(id).subscribe(equipes => this.equipes = equipes);
   return this.ficheSrv.getFicheByEquipeId(id);
  }

}
