import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../class/User';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserCService {
    private userCUrl = 'http://localhost:8000/api/authme';
    private testUrl = 'http://localhost:8000/api/test';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getUserC(): Promise<User> {
        return this.http.get(this.userCUrl)
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }
    getTest(): Promise<User> {
        return this.http.get(this.testUrl)
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }

}
