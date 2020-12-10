import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuiAlertModule } from 'm-ui-lib/mui-alert';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MuiAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
