import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragZoomDirective } from './directive/drag-zoom.directive';
@NgModule({
  declarations: [DragZoomDirective],
  imports: [
    CommonModule
  ],
  exports: [DragZoomDirective]
})
export class MuiShareModule { }
