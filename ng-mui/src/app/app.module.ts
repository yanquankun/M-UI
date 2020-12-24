import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ------ mui模块引入区域 start ----------
import { AppCodeModule } from './code.component';
import { MuiAlertModule } from 'm-ui-lib/alert';
import { TagModule } from 'm-ui-lib/tag';
import { MenuModule } from 'm-ui-lib/menu';
import { DatePickerModule } from 'm-ui-lib/date-picker';
// ------ mui模块引入区域 end ----------
// ------ 指令引入区域 start ----------
import { MuiShareModule } from 'm-ui-lib/mui-share';
// ------ 指令引入区域 end ----------
// ------ 组件引入区域 start ----------
import { HeaderComponent } from './core/header/header.component';
import { SilderComponent } from './core/silder/silder.component';
import { StartComponent } from './introduce/start/start.component';
import { AlertComponent } from './components/alert/alert.component';
import { TagComponent } from './components/tag/tag.component';
import { MenuComponent } from './components/menu/menu.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { ApiComponent } from './components/api/api.component';
import { DragZoomComponent } from './components/drag-zoom/drag-zoom.component';
// ------ 组件引入区域 end ----------
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SilderComponent,
    StartComponent,
    AlertComponent,
    TagComponent,
    MenuComponent,
    TimePickerComponent,
    ApiComponent,
    DragZoomComponent,
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
    DatePickerModule,
    AppCodeModule,
    MuiShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
