
import { User } from './../../class/User';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-team-user-form',
  templateUrl: './team-user-form.component.html',
  styleUrls: ['./team-user-form.component.css']
})
export class TeamUserFormComponent implements OnInit {
  @Input() selectedUser: User;
  model: User;
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.model = this.selectedUser ;
    // Workaround assigner select2 une fois la variable selectedUser attribué
    const select2 = Observable.timer(100);
    select2.subscribe(() => $('.multsel').select2());
  }

}
