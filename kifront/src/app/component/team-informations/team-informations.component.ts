import { Component, OnInit , Input, ViewChild, ElementRef } from '@angular/core';
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
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';

declare var $: any;

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
  previousReferent: User;
  nextReferent: IhniUser;
  pilote: boolean = false;
  edit: boolean = false;
  teamType: string;
  model: FormGroup;
  datePickerControl = new FormControl(); // date selector for the "activity since" field
  //searchReferent: string = ""; // search field for the referent
  previousDate: Date;
  nextDate: Date
  displayedDate: String;
  formatedDatePickerStartDate: string;
  formatedDatePickerStartDatee: number;

  @ViewChild('teamTypeInput', {static: false}) teamTypeInput: ElementRef;
  @ViewChild('searchReferent', {static: false}) searchReferent: ElementRef;
  @ViewChild('datePickerInput', {static: false}) datePickerInput: ElementRef;
  

  config = {
    theme: 'snow',
    modules : {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }]
      ]
    },
    placeholder : 'Votre description ici...'
  };

  constructor(private fb: FormBuilder, private userService: UserService, private teamService: TeamService, private context: ContextService, private subscriptionService: SubscriptionCancelService) { }

  ngOnInit() {
    if (this.team.kiTeam.activitySince){
      let date = new Date(this.team.kiTeam.activitySince);
      this.displayedDate = date.getDate().toString().padStart(2, "0") + "/" + (date.getMonth()+1).toString().padStart(2, "0") + "/" + date.getFullYear();
    }
    this.previousDate = new Date(this.team.kiTeam.activitySince);
    let formatedDate = new Date(this.team.kiTeam.activitySince);
    this.formatedDatePickerStartDate = "{year: " + formatedDate.getFullYear() + ", month: " + formatedDate.getMonth()+1 + ", day: " + "01" + "}";
    
    //this.formatedDatePickerStartDatee = this.team.kiTeam.activitySince.getFullYear();

    this.pilote = (this.context.me.id === this.team.ihniTeam.info.pilote.id);
    this.teamType = this.team.kiTeam.type;
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
        this.previousReferent = user;
        this.referent = user.ihniUser.info.prenom + " " + user.ihniUser.info.nom;
      });
    }
    
    this.createForm();

    this.model.patchValue({
      description: this.team.kiTeam.description ? this.team.kiTeam.description : ''
    });
  }

  createForm() {
    this.model = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onDateSelect(ngbDate: NgbDate){
    //let dateNextDay = 
    //dateee.setDate(dateee.getDate()+1);
    this.nextDate = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day, 8, 0, 0);
    //this.nextDate = new Date(2020, 1, 1);
    //this.team.kiTeam.activitySince = dateee;
  }

  onSubmitUser(user: IhniUser) {
    /*this.userService.update(this.model.kiUser).subscribe(() => {
      $('#user-modal').modal('hide');
    });*/
    this.referent = user.info.prenom + " " + user.info.nom;
    this.nextReferent = user;
    //this.team.kiTeam.referentIhniId = user.info.id;
    this.searchReferent.nativeElement.value = '';
    //this.subscriptionService.addSubscription(this.teamService.update(this.team).subscribe());
  }

  submitType() {
    this.team.kiTeam.type = this.teamType;
    //this.subscriptionService.addSubscription(this.teamService.update(this.team).subscribe());
  }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  submitEdit(buttonType: string): void{
    if(buttonType==="edit") {
      this.edit = true;
    }
    if(buttonType==="save"){
      this.team.kiTeam.type = this.teamTypeInput.nativeElement.value;
      this.teamType = this.teamTypeInput.nativeElement.value;
      //this.team.kiTeam.activitySince = new Date(this.datePickerControl.value.year, this.datePickerControl.value.month - 1, this.datePickerControl.value.day);
      this.team.kiTeam.description = this.model.controls.description.value;
      this.edit = false;

      // Save referent
      if (this.nextReferent){
        this.team.kiTeam.referentIhniId = this.nextReferent.info.id;
      }
      
      // Save the date
      if (this.nextDate){
        this.team.kiTeam.activitySince = this.nextDate;
        this.displayedDate = this.nextDate.getDate().toString().padStart(2, "0") + "/" + (this.nextDate.getMonth()+1).toString().padStart(2, "0") + "/" + this.nextDate.getFullYear();
      }
      

      // Save in database
      this.subscriptionService.addSubscription(this.teamService.update(this.team).subscribe());
    }
    if(buttonType==="annule"){
      this.edit = false;

      // Switch back to the previous date
      //this.datePickerInput.nativeElement.value = this.previousDate;
      this.team.kiTeam.activitySince = this.previousDate;
      //this.datePickerControl.value.year = this.previousDate;

      // Switch back to the previous referent
      this.referent = this.previousReferent.ihniUser.info.prenom + " " + this.previousReferent.ihniUser.info.nom;

      // Switch back to previous description
      //this.model.controls.description.value = this.team.kiTeam.description;
    }
  }

  submitSave(): void{
    this.edit = false;
  }

  ngOnChanges() {
    if (!isNullOrUndefined(this.team)) {
      this.model.reset();
      this.model.patchValue({
        description: this.team.kiTeam.description ? this.team.kiTeam.description : ''
      });
    }

  }

  getDescription(): String {
    return this.team.kiTeam.description;
  }

}
