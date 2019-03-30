import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MedicationsTableHistoryComponent } from './medications-table-history.component';

@NgModule({
  declarations: [
    MedicationsTableHistoryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MedicationsTableHistoryComponent
  ]
})
export class MedicationsTableHistoryModule { }
