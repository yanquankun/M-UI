import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './introduce/start/start.component';
import { AlertComponent } from './components/alert/alert.component';
import { TagComponent } from './components/tag/tag.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  }, {
    path: "start",
    component: StartComponent
  }, {
    path: "alert",
    component: AlertComponent
  }, {
    path: "tag",
    component: TagComponent
  }, {
    path: '**',
    canActivate: [StartComponent],
    redirectTo: 'start',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
