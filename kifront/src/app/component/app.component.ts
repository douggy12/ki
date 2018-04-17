import { UserInfo } from './../class/UserInfo';
import { ContextService } from './../service/Context.service';
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

  me: UserInfo;
  myTeam: string;

  constructor(private authService: AuthService, private cookieService: CookieService, private context: ContextService) { }

  ngOnInit(): void {
    this.authService.authMe().subscribe(user => {
      this.me = user;
      this.context.setMe(user);
    });
    this.myTeam = this.cookieService.get('ihni_context');
    this.context.setMyTeam(this.myTeam);
  }

}
