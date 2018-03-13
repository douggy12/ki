import { ContextService } from './service/Context.service';
import { ConfigService } from './config/config.service';
import { Ng2ImgToolsService } from 'ng2-img-tools';
import { AvatarService } from './service/avatar.service';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { TeamUserFormComponent } from './component/team-user-form/team-user-form.component';
import { TeamDetailFormComponent } from './component/team-detail-form/team-detail-form.component';
import { TeamSearchComponent } from './component/team-search/team-search.component';
import { AppScriptComponent } from './component/app-script.component';
import { AppFooterComponent } from './component/app-footer.component';
import { TeamUsersComponent } from './component/team-users/team-users.component';

import { TeamService } from './service/team.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Select2Module } from 'ng2-select2';


// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTeamService } from './in-memory-team.service';




import { AppComponent } from './component/app.component';
import { TeamsComponent } from './component/teams/teams.component';
import { TeamDetailComponent } from './component/team-detail/team-detail.component';
import {MessageService} from './message.service';
import { ImgResizeExactService } from 'ng2-img-tools/dist/src/img-resize-exact.service';
import { Ng2ImgToolsModule } from 'ng2-img-tools/dist/src/ng2-img-tools.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamDetailFormComponent,
    TeamUsersComponent,
    AppFooterComponent,
    AppScriptComponent,
    TeamSearchComponent,
    TeamUserFormComponent


],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    Ng2ImgToolsModule,
    // Select2Module
    // module simu APIREST
    // InMemoryWebApiModule.forRoot(InMemoryTeamService),
  ],
  providers: [ TeamService, UserService, AuthService, MessageService, ConfigService,
     AvatarService, CookieService, ContextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
