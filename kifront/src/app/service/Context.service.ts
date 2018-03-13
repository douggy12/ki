import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Team } from './../class/Team';
import { User } from './../class/User';
import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {

    me: User;
    myTeam: string;


    constructor() { }

    setMe(user: User) {
        this.me = user;
    }
    setMyTeam(nb: string) {
        this.myTeam = nb;
    }

}
