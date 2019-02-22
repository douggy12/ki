import { TeamService } from './../../service/team.service';
import { Team } from './../../class/Team';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
declare var $: any;
// new
@Component({
  selector: 'app-team-detail-form',
  templateUrl: './team-detail-form.component.html',
  styleUrls: ['./team-detail-form.component.css']
})
export class TeamDetailFormComponent implements OnInit {
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


  @Input() team: Team;
  model: FormGroup;
  constructor(private fb: FormBuilder, private teamService: TeamService) {
    this.createForm();
  }

  onSubmit({ value, valid }: { value, valid: boolean }) {
    this.team.kiTeam.description = value.description;
    $('#team-edit-modal').modal('hide');
    this.teamService.update(this.team).subscribe();

  }

  createForm() {
    this.model = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    if (!isNullOrUndefined(this.team)) {
      this.model.reset();
      this.model.patchValue({
        description: this.team.kiTeam.description ? this.team.kiTeam.description : ''
      });
    }

  }



}
