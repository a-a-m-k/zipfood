import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

import { MatTabsModule } from '@angular/material/tabs';
import { PatientInfoModule } from '../patient-info/patient-info.module';
import { MedicationsModule } from '../medications/medications.module'
import { DiagnosesModule } from '../diagnoses/diagnoses.module';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    PatientInfoModule,
    MedicationsModule,
    DiagnosesModule
  ],
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
