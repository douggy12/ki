import { debounceTime ,  tap, catchError, map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ConfigService } from './../config/config.service';
import { IhniUser } from './../class/IhniUser';
import { UserInfo } from './../class/UserInfo';
import { KiUser } from './../class/KiUser';
import { User } from './../class/User';
import { IhniSearch } from './../class/IhniSearch';
import { Observable ,  of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from '../service/message.service';
import { Team } from './../class/Team';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
    private skillexUrl = environment.kibackUrl + 'skillexapi/api/collaborateur';
    private userUrl = environment.kibackUrl + 'ihni/user';
    private urlSearchUser = environment.kibackUrl + 'ihni/user/searchUserByName';
    private urlSearchUserAndTeam = environment.kibackUrl + 'ihni/user/searchUserAndTeamByName';
    options: any = {'withCredentials' : 'true'};


constructor(private http: HttpClient, private config: ConfigService, private message: MessageService) { }

get(id: number): Observable<any> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url, this.options)
        .pipe(
            catchError(this.config.handleError)
        )
    ;
}
update(user: KiUser): Observable<any> {
    const url = `${this.userUrl}/${user.ihniId}`;
    console.log(user);
    return this.http.put(url, user, this.options)
        .pipe(
           tap(
               data => {
                this.message.clear();
                this.message.addOK('Sauvegardé !');
                setTimeout( () => {this.message.clear(); }, 800);
               },
               error => {
                this.message.clear();
                this.message.addKO('Erreur : contactez le support');
               },
           )
        );
}

searchUsers(term: string): Observable<any> {
    if (!term.trim()) {
        // pas de term => return empty array
        return of([]);
    }
    return this.http.get<IhniUser[]>(this.urlSearchUser + `?term=${term}`, this.options)
        .pipe(
            catchError(this.config.handleError)
        )
    ;
}

searchUsersAndTeams(term: string): Observable<any> {
    if (!term.trim()) {
        // pas de term => return empty array
        return of([]);
    }
    return this.http.get<IhniSearch[]>(this.urlSearchUserAndTeam + `?term=${term}`, this.options)
        .pipe(
            catchError(this.config.handleError)
        )
    ;
}

getCompUser(id: number): Observable<any> {
    const url = `${this.skillexUrl}/${id}/competence-acquise/savoirs`;
    return this.http.get<Team>(url, this.options)
    .pipe(
      catchError(this.config.handleError)
  );
}
}
