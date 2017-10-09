import { Component, OnInit } from '@angular/core';
import {Fiche} from '../../interfaces/Fiche';
import {Equipe} from '../../interfaces/Equipe';
import {Router, ActivatedRoute} from '@angular/router';
import {SrvFicheService} from '../../services/srv-fiche.service';
import {SrvEquipeService} from '../../services/srv-equipe.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  fiche: Fiche;
  equipes: Equipe[];
  parcours: string[];
  selectedEquipe: string;

  constructor(private route: ActivatedRoute,private equipeSrv: SrvEquipeService, private ficheSrv: SrvFicheService) { }

  ngOnInit() {
    this.equipeSrv.getEquipes().subscribe(equipes => this.equipes = equipes);
    this.route.data.subscribe((data: {fiche: Fiche}) => {
      this.fiche = data.fiche;
      // console.log('NGinit fiche : ',this.fiche);
    });
    //this.parcours =["equipe1","equipe2","equipe3"];
    //this.fiche.parcours=this.parcours;
    // console.log('NGinit Equipes : ',this.equipes);
    this.selectedEquipe="";
  }
  public supprimerEquipe(index){
    // console.log('supprimer l equipe : '+index);
    if(index!=""){
      this.fiche.parcours.splice(index, 1);
    }
  }
  public ajouterEquipe(name: string){
    console.log('Ajouter l equipe : '+name+ ' selected : '+ this.selectedEquipe);
    if(name!==""){
      if(this.fiche.parcours===null){
        this.fiche.parcours = new Array();
      }
      this.fiche.parcours.push(name);
      this.selectedEquipe="";
    }
  }

  public onSubmit(){
    console.log('submited '+ this.fiche.nbrEnfant + " equipes" + this.fiche.parcours);
    return this.ficheSrv.updateFiche(this.fiche.ficheId,this.fiche).subscribe(fiche => this.fiche = fiche);
    
  }

}
