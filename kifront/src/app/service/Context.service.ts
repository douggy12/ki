import { UserInfo } from './../class/UserInfo';
import { Observable ,  Subject } from 'rxjs';
import { Team } from './../class/Team';
import { User } from './../class/User';
import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {

    me: UserInfo;
    myTeam: string;


    constructor() { }

    setMe(user: UserInfo) {
        this.me = user;
    }
    setMyTeam(nb: string) {
        this.myTeam = nb;
    }

}
