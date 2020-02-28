import { SpinnerComponent } from './component/spinner/spinner.component';
import { MessageService } from './service/message.service';
import { MessagesComponent } from './component/messages/messages.component';
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
import { BuService } from './service/bu.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AppComponent } from './component/app.component';
import { TeamsComponent } from './component/teams/teams.component';
import { TeamDetailComponent } from './component/team-detail/team-detail.component';
import { ImgResizeExactService } from 'ng2-img-tools/dist/src/img-resize-exact.service';
import { Ng2ImgToolsModule } from 'ng2-img-tools/dist/src/ng2-img-tools.module';
import { CookieService } from 'ngx-cookie-service';
import { AgencesComponent } from './component/agences/agences.component';
import { TeamInformationsComponent } from './component/team-informations/team-informations.component';
import {NgbAlertModule, NgbModule, NgbPopoverModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {SafeHtmlPipe} from './pipes/sanitizeHtml.pipe';
import {FormatDatePickerStartDate} from './pipes/formatDatePickerStartDate.pipe';
import {NgbDateCustomParserFormatter} from './utils/NgbDateCustomParserFormatter';
import { CommonModule } from '@angular/common';



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
    TeamUserFormComponent,
    MessagesComponent,
    SpinnerComponent,
    AgencesComponent,
    TeamInformationsComponent,
    SafeHtmlPipe,
    FormatDatePickerStartDate
],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2ImgToolsModule,
    QuillEditorModule,
    NgbModule
  ],
  providers: [ TeamService, UserService, AuthService, MessageService, ConfigService,
     AvatarService, CookieService, ContextService, {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
