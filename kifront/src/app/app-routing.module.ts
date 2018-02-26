import { TeamDetailComponent } from './component/team-detail/team-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    // {path: '', redirectTo: '', pathMatch: 'full'},
    // {path: 'team/:id', component: TeamDetailComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
