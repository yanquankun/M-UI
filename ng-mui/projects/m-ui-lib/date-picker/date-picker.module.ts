import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { CalendarPickerComponent } from './calendar-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatePickerComponent, CalendarPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [DatePickerComponent, CalendarPickerComponent]
})
export class DatePickerModule { }
