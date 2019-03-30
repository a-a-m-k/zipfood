import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { MedicationsComponent } from './medications.component';
import { MedicationsTableActiveModule } from './medications-table-active/medications-table-active.module';
import { MedicationsTableHistoryModule } from './medications-table-history/medications-table-history.module';

@NgModule({
  declarations: [
    MedicationsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MedicationsTableActiveModule,
    MedicationsTableHistoryModule
  ],
  exports: [
    MedicationsComponent
  ]  
})
export class MedicationsModule { }
