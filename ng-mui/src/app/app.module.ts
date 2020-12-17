import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuiAlertModule } from 'm-ui-lib/alert';
import { TagModule } from 'm-ui-lib/tag';
import { MenuModule } from 'm-ui-lib/menu';
import { AppCodeModule } from './code.component';
import { HeaderComponent } from './header/header.component';
import { SilderComponent } from './silder/silder.component';
import { StartComponent } from './introduce/start/start.component';
import { AlertComponent } from './components/alert/alert.component';
import { TagComponent } from './components/tag/tag.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SilderComponent,
    StartComponent,
    AlertComponent,
    TagComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MuiAlertModule,
    TagModule,
    MenuModule,
    AppCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
