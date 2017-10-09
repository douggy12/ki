import { Injectable } from '@angular/core';
import {Equipe} from '../interfaces/Equipe';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SrvEquipeService {

  urlEquipe='http://localhost:8080/MTS_BACKEND/getAllEquipe';
  
  constructor(private _http: Http) { }

  getEquipes(): Observable<Equipe[]> { 
    return  this._http.get(this.urlEquipe).map((response : Response)=> <Equipe[]> response.json()).catch(this.httpError);
  }

  private httpError(error : Response){
    console.error('error :: ',error);
    return Observable.throw (error.json().error || 'Server error');  
  }
}
