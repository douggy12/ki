import { debounceTime } from 'rxjs/operators/debounceTime';
import { environment } from './../../environments/environment';
import { ConfigService } from './../config/config.service';
import { IhniUser } from './../class/IhniUser';
import { tap, catchError, map } from 'rxjs/operators';
import { UserInfo } from './../class/UserInfo';
import { KiUser } from './../class/KiUser';
import { User } from './../class/User';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../service/message.service';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
    private teamUrl = environment.kibackUrl + 'ihni/user';
    options: any = {'withCredentials' : 'true'};


constructor(private http: HttpClient, private config: ConfigService, private message: MessageService) { }

get(id: number): Observable<User> {
    const url = `${this.teamUrl}/${id}`;
    return this.http.get<User>(url, this.options)
        .pipe(
            catchError(this.config.handleError)
        )
    ;
}
update(user: KiUser): Observable<any> {
    const url = `${this.teamUrl}/${user.ihniId}`;
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
searchUsers(term: string): Observable<IhniUser[]> {
    if (!term.trim()) {
        // pas de term => return empty array
        return of([]);
    }
    return this.http.get<IhniUser[]>(this.teamUrl + `?term=${term}`, this.options)
        .pipe(
            catchError(this.config.handleError)
        )
    ;
}

}
