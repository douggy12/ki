import { Injectable } from '@angular/core';
import {Fiche} from '../interfaces/Fiche';
import {SrvFicheService} from '../services/srv-fiche.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';


@Injectable()
export class FicheResolveService implements Resolve<Fiche>{

  constructor(private ficheSrv: SrvFicheService) { }
  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	let id= +route.params['id'];
  	return this.ficheSrv.getFicheById(id).map(product => product);
  }

}
