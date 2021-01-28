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
import { ProgressModule } from 'm-ui-lib/progress';
import { SelectModule } from 'm-ui-lib/select';
import { ButtonModule } from 'm-ui-lib/button';
// ------ mui模块引入区域 end ----------
// ------ 指令引入区域 start ----------
import { MuiShareModule } from 'm-ui-lib/mui-share';
import { InputModule } from 'm-ui-lib/input';
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
import { ProgressComponent } from './components/progress/progress.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
// ------ 组件引入区域 end ----------
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
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
    ProgressComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
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
    ProgressModule,
    SelectModule,
    ButtonModule,
    InputModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
