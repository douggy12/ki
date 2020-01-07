import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { TeamInfo } from './../class/TeamInfo';
import { IhniTeam } from './../class/IhniTeam';
import { Team } from './../class/Team';



import { Injectable } from '@angular/core';

import {Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from '../service/message.service';
import { ConfigService } from '../config/config.service';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'withCredentials' : 'true' })
};

@Injectable()
export class TeamService {
    private teamUrl = environment.kibackUrl + 'ihni/team';

    options: any = {'withCredentials' : 'true'};

    constructor(private http: HttpClient, private messageService: MessageService, private config: ConfigService) { }

    getTeams(): Observable<any> {
        return this.http.get<Team[]>(this.teamUrl, this.options)
        .pipe(
          catchError(this.config.handleError)
      );
    }
    getTeam(id: number): Observable<any> {
        const url = `${this.teamUrl}/${id}`;
        return this.http.get<Team>(url, this.options)
        .pipe(
          catchError(this.config.handleError)
      );
    }
    update(team: Team): Observable<any>  {
      const url = `${this.teamUrl}/${team.ihniTeam.info.id}`;
      return this.http.put(url, team.kiTeam, httpOptions);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.log(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.addOK('HeroService: ' + message);
    }

}
