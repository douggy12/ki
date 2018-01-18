import { User } from './../class/User';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
update(user: User): Observable<any> {
    const url = `${this.teamUrl}/${user.ihniUser.info.id}`;
    return this.http.put(url, user.kiUser, httpOptions);
}

}
