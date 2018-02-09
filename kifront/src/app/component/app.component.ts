import { AuthService } from './../service/auth.service';
import { User } from './../class/User';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CookieService } from 'ngx-cookie-service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  me: User;
  carlos: User;
  cookieValue : any;

  constructor(private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.authService.authMe().subscribe(user => {
      console.log(user);
    });
    this.cookieService.set('myCookie', 'this my cookie');
    this.cookieValue = this.cookieService.getAll();
    console.log(this.cookieValue);
    console.log(document.cookie);
  }

}
