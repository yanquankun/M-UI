import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuiAlertModule } from 'm-ui-lib/alert';
import { TagModule } from 'm-ui-lib/tag';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MuiAlertModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
