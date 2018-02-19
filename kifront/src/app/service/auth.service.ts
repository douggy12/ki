import { catchError } from 'rxjs/operators';
import { ConfigService } from './../config/config.service';
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../class/User';
// import { RequestOptions } from '@angular/http/src/base_request_options';
// import { Headers } from '@angular/http/src/headers';


@Injectable()
export class AuthService {
    private authUrl = 'http://localhost:8000/api/authme';
    // headers: Headers;
    options: any = {'withCredentials' : 'true'};
    constructor(private http: HttpClient, private config: ConfigService) {
        // this.headers = new Headers( {'Content-Type': 'application/json'});
        // this.options = new RequestOptions({ headers: this.headers, withCredentials: true});
     }

    authMe(): Observable<User> {
        return this.http.get<User>(this.authUrl, this.options)
            .pipe(
                catchError(this.config.handleError)
            );
    }

}
