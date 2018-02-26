import { TeamInfo } from './../../class/TeamInfo';
import { UserService } from './../../service/user.service';
import { UserInfo } from './../../class/UserInfo';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
import { IhniUser } from '../../class/IhniUser';



@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {
  @Output() submitedTeam = new EventEmitter<TeamInfo>();
  users$: Observable<IhniUser[]>;
  private searchTerms = new Subject<string>();

  constructor(private userService: UserService) { }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  onSubmitTeam(team: TeamInfo) {
    this.submitedTeam.emit(team);
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
