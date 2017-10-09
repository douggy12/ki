import { Injectable } from '@angular/core';
import {Fiche} from '../interfaces/Fiche';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SrvFicheService {

  urlFiche='http://localhost:8080/MTS_BACKEND/getFiche?id=';
  urlFicheByEquipe='http://localhost:8080/MTS_BACKEND/getFicheByEquipeId?id=';
  urlFicheUpdate='http://localhost:8080/MTS_BACKEND/putFiche/';
  constructor(private _http: Http) {  }

  getFicheById(id): Observable<Fiche> { 
    //return  this._http.get(this.urlFiche+'id').map((response : Response)=> <Fiche[]> response.json()).toPromise();
    
    return  this._http.get(this.urlFiche+id).map((response : Response)=> <Fiche> response.json()).catch(this.httpError);
  }

  getFicheByEquipeId(idEquipe) { 
    return  this._http.get(this.urlFicheByEquipe+idEquipe).map((response : Response)=> <Fiche[]> response.json()).catch(this.httpError);
    //return this._http.get(this.urlFicheByEquipe+idEquipe).map((response : Response)=> <Fiche[]> response.json()).toPromise();
    
  }
  updateFiche(idfiche,fiche: Fiche) { 
    console.info( ' update fiche '+ idfiche+ '  '+ fiche.nbrEnfant);
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(fiche);

   //return  this._http.put(this.urlFicheUpdate+idfiche,body,options).map((response : Response)=> <Fiche[]> response.json()).catch(this.httpError);
    //return this._http.get(this.urlFicheByEquipe+idEquipe).map((response : Response)=> <Fiche[]> response.json()).toPromise();
     return this._http.put(this.urlFicheUpdate + idfiche, body, options ).map((res: Response) => res.json()).catch(this.httpError);;

    // return this._http.put(`${this.urlFicheUpdate}/${idfiche}`, body, options) // ...using put request
    //                  .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
  }

  private httpError(error : Response){
    console.error('error :: ',error);
    return Observable.throw (error.json().error || 'Server error');  
}

}
