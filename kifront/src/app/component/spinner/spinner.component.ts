import { Component, OnInit } from '@angular/core';
import { trigger, query, transition, animate, style, state, keyframes } from '@angular/animations';

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
      ]),
      // transition('void => *', [
      //   animate(120, keyframes([
      //     style({opacity : 0, offset: 0}),
      //     style({opacity : 1, offset: 1})
      //   ]))
      // ])
    ])
  ]
})
export class SpinnerComponent implements OnInit {

  state = 'active';
  show: Boolean = false;
  constructor() { }

  ngOnInit() {
    // fait apparaitre le spinner au bout de x ms d'attente
    setTimeout(() => {
      this.show = true;
    }, 700);
  }
  onDone($event) {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
