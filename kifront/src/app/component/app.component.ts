import { Component, OnInit } from '@angular/core';
import { TeamService } from './../service/team.service';
import { UserInfo } from './../class/UserInfo';
import { ContextService } from './../service/Context.service';
import { AuthService } from './../service/auth.service';
import { User } from './../class/User';
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
    this.authService.authMe().subscribe(userX => {
      this.me = userX;
      this.context.setMe(userX);

    });
    this.myTeam = this.cookieService.get('ihni_context');
    this.context.setMyTeam(this.myTeam);


    

  }
  

}


