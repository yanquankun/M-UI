import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiAlertModule } from 'm-ui-lib/alert';
import { TagModule } from 'm-ui-lib/tag';
import { MenuModule } from 'm-ui-lib/menu';
import { DatePickerModule } from 'm-ui-lib/date-picker';
import { MuiShareModule } from 'm-ui-lib/mui-share';
import { ProgressModule } from 'm-ui-lib/progress';
import { SelectModule } from 'm-ui-lib/select';
import { ButtonModule } from 'm-ui-lib/button';
import { InputModule } from 'm-ui-lib/input';
export * from 'm-ui-lib/alert';
export * from 'm-ui-lib/tag';
export * from 'm-ui-lib/menu';
export * from 'm-ui-lib/date-picker';
export * from 'm-ui-lib/mui-share';
export * from 'm-ui-lib/progress';
export * from 'm-ui-lib/select';
export * from 'm-ui-lib/button';
export * from 'm-ui-lib/input';
@NgModule({
  imports: [],
  exports: [
    MuiAlertModule,
    TagModule,
    MenuModule,
    DatePickerModule,
    MuiShareModule,
    ProgressModule,
    SelectModule,
    ButtonModule,
    InputModule,
  ],
  providers: [],
  declarations: []
})
export class MuiLibModule {
  static forRoot(): ModuleWithProviders<MuiLibModule> {
    return {
      ngModule: MuiLibModule,
    };
  }
}
