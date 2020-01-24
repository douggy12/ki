import { Component, OnInit , Input } from '@angular/core';
import { UserService } from './../../service/user.service';
import { TeamService } from './../../service/team.service';
import { ContextService } from '../../service/Context.service';
import { SubscriptionCancelService } from '../../service/subscription-cancel.service';
import { Observable ,  Subject } from 'rxjs';
import { debounceTime ,  distinctUntilChanged ,  switchMap } from 'rxjs/operators';
import { IhniUser } from '../../class/IhniUser';
import { User } from '../../class/User';
import { Team } from './../../class/Team';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team-informations',
  templateUrl: './team-informations.component.html',
  styleUrls: ['./team-informations.component.css']
})

export class TeamInformationsComponent implements OnInit {
  @Input() team: Team;
  users$: Observable<IhniUser[]>;
  private searchTerms = new Subject<string>();
  referent: string;
  pilote: boolean = false;

  constructor(private userService: UserService, private teamService: TeamService, private context: ContextService, private subscriptionService: SubscriptionCancelService) { }

  ngOnInit() {
    this.pilote = (this.context.me.id === this.team.ihniTeam.info.pilote.id);
    this.users$ = this.searchTerms.pipe(
      // attendre 300ms apres chaque entrée avant de lancer une recherche
      debounceTime(300),
      // ignore term si pareil que le précédent
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.searchUsers(term)),
    );
    
    if (this.team.kiTeam.referentIhniId){
      this.userService.get(this.team.kiTeam.referentIhniId).subscribe(user => {
        this.referent = user.ihniUser.info.prenom + " " + user.ihniUser.info.nom;
      });
    }
    
  }

  onDateSelect(ngbDate: NgbDate){
    this.team.kiTeam.activitySince = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    this.subscriptionService.addSubscription(this.teamService.update(this.team).subscribe());
  }

  onSubmitUser(user: IhniUser) {
    /*this.userService.update(this.model.kiUser).subscribe(() => {
      $('#user-modal').modal('hide');
    });*/
    this.referent = user.info.prenom + " " + user.info.nom;
    this.team.kiTeam.referentIhniId = user.info.id;
    this.subscriptionService.addSubscription(this.teamService.update(this.team).subscribe());
  }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
