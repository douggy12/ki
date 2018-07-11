import { TeamInfo } from './../../class/TeamInfo';
import { UserService } from './../../service/user.service';
import { UserInfo } from './../../class/UserInfo';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime ,  distinctUntilChanged ,  switchMap } from 'rxjs/operators';
import { IhniUser } from '../../class/IhniUser';
import { TeamRole } from '../../class/TeamRole';
import { ContextService } from '../../service/Context.service';



@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {
  @Output() submitedTeam = new EventEmitter<TeamInfo>();
  users$: Observable<IhniUser[]>;
  private searchTerms = new Subject<string>();
  myTeams: TeamRole[];

  constructor(private userService: UserService, private context: ContextService) { }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  onSubmitTeam(team: TeamInfo) {
    this.submitedTeam.emit(team);
  }

  ngOnInit(): void {
    this.userService.get(this.context.me.id).subscribe(user => {
      this.myTeams = user.ihniUser.equipes_role;
    });
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
