import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectItemComponent } from './select-item.component';
@NgModule({
  declarations: [SelectComponent, SelectItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SelectComponent, SelectItemComponent]
})
export class SelectModule { }
