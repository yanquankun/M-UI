import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiAlertModule } from 'm-ui-lib/alert';
import { TagModule } from 'm-ui-lib/tag';
export * from 'm-ui-lib/alert';
export * from 'm-ui-lib/tag';
@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [MuiAlertModule, TagModule],
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
