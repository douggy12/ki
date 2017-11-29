import { Team } from './../class/Team';

import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class TeamService {
    private teamUrl = 'api/teams';
    private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }

getTeams(): Promise<Team[]> {
    return this.http.get(this.teamUrl)
    .toPromise()
    .then(response => response.json().data as Team[])
    .catch(this.handleError);
}
getTeam(id: number): Promise<Team> {
    const url = `${this.teamUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Team)
    .catch(this.handleError);
}
update(team: Team): Promise<Team> {
    const url = `${this.teamUrl}/${team.id}`;
    return this.http
    .put(url, JSON.stringify(team), { headers: this.headers })
    .toPromise()
    .then(() => team)
    .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
