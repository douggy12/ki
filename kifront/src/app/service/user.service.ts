import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../class/User';
import {of} from 'rxjs/observable/of';
import {tap} from "rxjs/operators";

@Injectable()
export class UserService {
  private userUrl = 'api/users';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // pas de term => tableau vide
      return of([]);
    }
    return this.http.get(`api/users/?name=?{term}`)
      .pipe(tap(_ => this.log(`found users matching "${term}"`))
        .catchError(this.handleError<User[]>('searchUsers', [])));
  }
}
