import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
//import {AdminLet} from 'admin-lte';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FicheComponent } from './compos/fiche/fiche.component';
import { EquipeComponent } from './compos/equipe/equipe.component';
import { LoginComponent } from './compos/login/login.component';
import { DetailsComponent } from './compos/details/details.component';
import { RoutingModule } from './routing/routing.module';
import { NewCompComponent } from './compos/new-comp/new-comp.component';
import {SrvFicheService} from './services/srv-fiche.service';
import {SrvEquipeService} from './services/srv-equipe.service';
import {FicheResolveService} from './resolve/fiche-resolve.service';

import {SafeHtml} from './pipes/image.pipe';
import { ListeComponent } from './compos/liste/liste.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent,
    EquipeComponent,
    LoginComponent,
    DetailsComponent,
    NewCompComponent,
    SafeHtml,
    ListeComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
 //   AdminLet
  ],
  providers: [SrvFicheService,SrvEquipeService,FicheResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
