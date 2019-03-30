import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetTableComponent } from './widget-table.component';
import { MatTableModule, MatButtonModule }  from '@angular/material';
import { CONSTANT_TOKEN, CONSTANTS } from './widget-table.constant';

@NgModule({
  imports: [
    CommonModule,    
    MatTableModule,
    MatButtonModule
  ],
  declarations: [WidgetTableComponent],
  exports: [WidgetTableComponent],
  providers: [
    { provide: CONSTANT_TOKEN, useValue: CONSTANTS }
]
})
export class WidgetTableModule { }



