import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { WidgetsWrapperModule } from '../widgets-wrapper/widgets-wrapper.module';
import { PatientInfoDirective } from './patient-info.directive';
import { PatientInfoComponent } from './patient-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    WidgetsWrapperModule
  ],
  declarations: [
    PatientInfoComponent,
    PatientInfoDirective
  ],
  exports: [
    PatientInfoComponent
  ]
})
export class PatientInfoModule { }
