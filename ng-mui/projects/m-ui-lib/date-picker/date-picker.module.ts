import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { CalendarPickerComponent } from './calendar-picker.component';

@NgModule({
  declarations: [DatePickerComponent, CalendarPickerComponent],
  imports: [
    CommonModule
  ],
  exports: [DatePickerComponent, CalendarPickerComponent]
})
export class DatePickerModule { }
