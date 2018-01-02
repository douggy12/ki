import { TeamDetailComponent } from './component/team-detail/team-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from './component/teams/teams.component';



const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'team/:id', component: TeamsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
