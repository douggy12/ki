import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../compos/login/login.component';
import {EquipeComponent} from '../compos/equipe/equipe.component';
import {FicheComponent} from '../compos/fiche/fiche.component';
import {DetailsComponent} from '../compos/details/details.component';
import {ListeComponent} from '../compos/liste/liste.component';
import {FicheResolveService} from '../resolve/fiche-resolve.service';


const routers : Routes = [
	{path : '', pathMatch: 'full', redirectTo:'login'},
	{path : 'login', component : LoginComponent},
  {path : 'equipe', component : EquipeComponent},
  {path : 'fiche/:id', component : FicheComponent,resolve: {fiche: FicheResolveService}},
  {path : 'liste/:id', component : ListeComponent},
  {path : 'details/:id', component : DetailsComponent,resolve: {fiche: FicheResolveService}},
	{path : '**', pathMatch: 'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class RoutingModule { }