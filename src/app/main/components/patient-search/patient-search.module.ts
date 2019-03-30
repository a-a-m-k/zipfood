import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PatientSearchComponent } from './patient-search.component';
import { FilterPatientsListPipe } from './patient-search.pipe';
import { ShowPatientsListModule } from '../show-patients-list/show-patients-list.module';

@NgModule({
  declarations: [
    PatientSearchComponent,
    FilterPatientsListPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowPatientsListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    PatientSearchComponent,
    FilterPatientsListPipe
  ],
  providers: [
    FilterPatientsListPipe
  ]
})
export class PatientSearchModule { }
