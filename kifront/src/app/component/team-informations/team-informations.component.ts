import { Component, OnInit , Input } from '@angular/core';
import { Team } from './../../class/Team';

@Component({
  selector: 'app-team-informations',
  templateUrl: './team-informations.component.html',
  styleUrls: ['./team-informations.component.css']
})
export class TeamInformationsComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
