import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsWrapperComponent } from './widgets-wrapper.component';
import { WidgetTableModule } from './widget-table/widget-table.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetTableModule
  ],
  declarations: [WidgetsWrapperComponent],
  exports: [WidgetsWrapperComponent]  
})
export class WidgetsWrapperModule { }
