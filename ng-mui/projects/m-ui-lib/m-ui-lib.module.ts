import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiAlertModule } from 'm-ui-lib/alert';
import { TagModule } from 'm-ui-lib/tag';
import { MenuModule } from 'm-ui-lib/menu';
export * from 'm-ui-lib/alert';
export * from 'm-ui-lib/tag';
export * from 'm-ui-lib/menu';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MuiAlertModule, TagModule, MenuModule],
  providers: [],
  declarations: []
})
export class MUiLibModule {
  static forRoot(): ModuleWithProviders<MUiLibModule> {
    return {
      ngModule: MUiLibModule,
    };
  }
}
