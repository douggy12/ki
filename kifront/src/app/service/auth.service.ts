import { UserInfo } from './../class/UserInfo';
import { Team } from './../class/Team';
import { catchError } from 'rxjs/operators';
import { ConfigService } from './../config/config.service';
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../class/User';
import { ContextService } from './Context.service';
import { environment } from '../../environments/environment';
// import { RequestOptions } from '@angular/http/src/base_request_options';
// import { Headers } from '@angular/http/src/headers';


@Injectable()
export class AuthService {
    private authUrl = environment.ihniUrl + '/api/authme';
    // headers: Headers;
    options: any = {'withCredentials' : 'true'};
    constructor(private http: HttpClient, private config: ConfigService, private context: ContextService) {
        // this.headers = new Headers( {'Content-Type': 'application/json'});
        // this.options = new RequestOptions({ headers: this.headers, withCredentials: true});
     }

    authMe(): Observable<UserInfo> {
        return this.http.get<UserInfo>(this.authUrl, this.options)
            .pipe(
                catchError(this.config.handleError)
            );
    }
    isPilote(user: UserInfo, team: Team) {
        if (team.ihniTeam.info.pilote.id === user.id) {
            return true;
        }
        return false;
    }
    isOwner(user: UserInfo) {
        if (this.context.me.id === user.id) {
            return true;
        }
        return false;
    }

}
