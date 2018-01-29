import { UserService } from './../../service/user.service';
import { UserInfo } from './../../class/UserInfo';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';


@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {
  users$: Observable<UserInfo[]>;
  private searchTerms = new Subject<string>();

  constructor(private userService: UserService) { }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      // attendre 300ms apres chaque entrée avant de lancer une recherche
      debounceTime(300),
      // ignore term si pareil que le précédent
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.searchUsers(term)),
    );
  }

}
