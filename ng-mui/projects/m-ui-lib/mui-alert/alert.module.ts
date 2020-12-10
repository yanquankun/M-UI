import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiAlertComponent } from './alert.component';

@NgModule({
  declarations: [MuiAlertComponent],
  imports: [
    CommonModule
  ],
  exports:[MuiAlertComponent]
})
export class MuiAlertModule { }
