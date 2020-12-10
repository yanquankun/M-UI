import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiAlertModule } from 'm-ui-lib/mui-alert';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MuiAlertModule],
  providers: []
})
export class MUiLibModule { }
