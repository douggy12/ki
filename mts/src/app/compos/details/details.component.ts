import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Fiche} from '../../interfaces/Fiche';
import {Router, ActivatedRoute} from '@angular/router';
import {SrvFicheService} from '../../services/srv-fiche.service';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  private id: number;
  fiche: Fiche;

  constructor(private route: ActivatedRoute, private ficheSrv: SrvFicheService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
  //   this.id= this.route.snapshot.params['id'];
  //  //this.id=1;
  //   this.ficheSrv.getFicheById(this.id).subscribe(fiche => this.fiche = fiche);
  //   console.log(" fiche : " + this.fiche);
    this.route.data.subscribe((data: {fiche: Fiche}) => {
      this.fiche = data.fiche;
      console.log('NGinit : ',this.fiche);
    });
  }

  photoURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
