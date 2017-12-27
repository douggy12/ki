import { UserCService } from './../service/userC.service';
import { User } from './../class/User';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  me: User;
  carlos: User;

  constructor(private meService: UserCService) { }

  ngOnInit(): void {
    // this.meService.getUserC().then(me => {this.me = me; });
    this.meService.getTest().then(carlos => {this.carlos = carlos; console.log(carlos.nom); });

  }
 
}
