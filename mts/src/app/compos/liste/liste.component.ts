import { Component, OnInit } from '@angular/core';
import {Fiche} from '../../interfaces/Fiche';
import {Router, ActivatedRoute} from '@angular/router';
import {SrvFicheService} from '../../services/srv-fiche.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  fiches: Fiche[];
  equipeId: number;
  
    constructor(private route: ActivatedRoute, private ficheSrv: SrvFicheService) { }
  
    ngOnInit() {
      this.equipeId= this.route.snapshot.params['id'];
      return this.ficheSrv.getFicheByEquipeId(this.equipeId).subscribe(fiches => this.fiches = fiches);
      
    }
}
