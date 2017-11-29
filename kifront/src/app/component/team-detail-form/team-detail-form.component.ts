import { Team } from './../../class/Team';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-team-detail-form',
  templateUrl: './team-detail-form.component.html',
  styleUrls: ['./team-detail-form.component.css']
})
export class TeamDetailFormComponent implements OnInit {

  @Input() team: Team;
  model: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  onSubmit({ value, valid}: {value, valid: boolean}) {
    this.team.description = value.description;
    $("#team-edit-modal").modal('hide');

  }

  createForm() {
    this.model = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  ngOnInit() {

  }
  ngOnChanges() {
    this.model.reset();
    this.model.patchValue({
      description : this.team ? this.team.description : null
    });
  }

}
