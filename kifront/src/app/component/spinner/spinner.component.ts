import { Component, OnInit } from '@angular/core';
import { trigger, query, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  animations: [
    trigger('spinner', [
      state('active', style({transform: 'rotate(0)'})),
      state('inactive', style({transform: 'rotate(360deg)'})),
      transition('active => inactive', [
        animate(1000)
      ])
    ])
  ]
})
export class SpinnerComponent implements OnInit {

  state = 'active';
  constructor() { }

  ngOnInit() {
  }
  onDone($event) {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
