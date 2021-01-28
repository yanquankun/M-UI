import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './introduce/start/start.component';
import { AlertComponent } from './components/alert/alert.component';
import { TagComponent } from './components/tag/tag.component';
import { MenuComponent } from './components/menu/menu.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { DragZoomComponent } from './components/drag-zoom/drag-zoom.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

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
    path: "menu",
    component: MenuComponent
  }, {
    path: "timepicker",
    component: TimePickerComponent
  }, {
    path: "drag-zoom",
    component: DragZoomComponent
  }, {
    path: "progress",
    component: ProgressComponent
  }, {
    path: "select",
    component: SelectComponent
  }, {
    path: "button",
    component: ButtonComponent
  }, {
    path: "input",
    component: InputComponent
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
