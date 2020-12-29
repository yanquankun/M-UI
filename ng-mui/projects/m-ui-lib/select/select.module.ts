import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectItemComponent } from './select-item.component';
import { TagModule } from 'm-ui-lib/tag';
@NgModule({
  declarations: [SelectComponent, SelectItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
  ],
  exports: [SelectComponent, SelectItemComponent]
})
export class SelectModule { }
