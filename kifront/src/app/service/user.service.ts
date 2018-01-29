import { tap } from 'rxjs/operators';
import { UserInfo } from './../class/UserInfo';
import { KiUser } from './../class/KiUser';
import { User } from './../class/User';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../class/UserInfo';
import { of } from 'rxjs/observable/of';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
    private teamUrl = 'http://localhost:8080/ihni/user';

constructor(private http: HttpClient) { }

get(id: number): Observable<User> {
    const url = `${this.teamUrl}/${id}`;
    return this.http.get<User>(url);
}
update(user: KiUser): Observable<any> {
    const url = `${this.teamUrl}/${user.ihniId}`;
    return this.http.put(url, user, httpOptions);
}
searchUsers(term: string): Observable<UserInfo[]> {
    if (!term.trim()) {
        // pas de term => return empty array
        return of([]);
    }
    return this.http.get<UserInfo[]>(this.teamUrl + `?term=${term}`);
}

}
