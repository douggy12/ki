import { ConfigService } from './../config/config.service';
import { IhniUser } from './../class/IhniUser';
import { tap, catchError } from 'rxjs/operators';
import { UserInfo } from './../class/UserInfo';
import { KiUser } from './../class/KiUser';
import { User } from './../class/User';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
    private teamUrl = 'http://localhost:8080/ihni/user';
    options: any = {'withCredentials' : 'true'};


constructor(private http: HttpClient, private config: ConfigService) { }

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
    return this.http.put(url, user, httpOptions);
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
