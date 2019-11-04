import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { TeamService } from './../service/team.service';
import { UserInfo } from './../class/UserInfo';
import { ContextService } from './../service/Context.service';
import { AuthService } from './../service/auth.service';
import { User } from './../class/User';
import { CookieService } from 'ngx-cookie-service';
declare function initQubHeader(appNom, qubAdress, kiAdress): any;

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

      // Appel de la Cube Header
      const appNom = 'Ki';
      const teamId = this.myTeam;
      const qubAdress = environment.ihniUrl;
      const kiAdress = environment.kibackUrl;
      initQubHeader(appNom, qubAdress, kiAdress);

    });
    this.myTeam = this.cookieService.get('ihni_context');
    this.context.setMyTeam(this.myTeam);




  }


}


