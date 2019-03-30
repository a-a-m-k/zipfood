import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosesComponent } from './diagnoses.component';
import { DiagnosesTableModule } from './diagnoses-table/diagnoses-table.module';

@NgModule({
  imports: [
    CommonModule,
    DiagnosesTableModule
  ],
  declarations: [
    DiagnosesComponent
  ],
  exports: [
    DiagnosesComponent
  ]
})
export class DiagnosesModule { }
