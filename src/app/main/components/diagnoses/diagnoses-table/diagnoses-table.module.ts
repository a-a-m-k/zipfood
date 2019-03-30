import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosesTableComponent } from './diagnoses-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PatientsContainerService } from '../../../containers/patients-container/patients-container.service';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    DiagnosesTableComponent
  ],
  exports: [
    DiagnosesTableComponent
  ],
  providers: [
    PatientsContainerService
  ]
})
export class DiagnosesTableModule { }
