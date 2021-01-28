import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input.directive';
import { InputTplComponent } from './input-tpl.component';

@NgModule({
  declarations: [InputDirective, InputTplComponent],
  imports: [
    CommonModule
  ],
  exports: [InputDirective, InputTplComponent]
})
export class InputModule { }
