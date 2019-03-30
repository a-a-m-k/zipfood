import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MedicationsTableActiveComponent } from './medications-table-active.component';
import { PatientsContainerService } from '../../../containers/patients-container/patients-container.service';

@NgModule({
  declarations: [
    MedicationsTableActiveComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MedicationsTableActiveComponent
  ],
  providers: [
    PatientsContainerService
  ]
})
export class MedicationsTableActiveModule { }
