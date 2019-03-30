import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PatientsContainerComponent } from './patients-container.component';
import { PatientsContainerService } from './patients-container.service';
import { PatientSearchModule } from '../../components/patient-search/patient-search.module';
import { ViewportModule } from '../viewport/viewport.module';
import { TabsModule } from '../../components/tabs/tabs.module';


@NgModule({
  declarations: [
    PatientsContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PatientSearchModule,
    ViewportModule,
    TabsModule
  ],
  exports: [
    PatientsContainerComponent
  ],
  providers: [
    PatientsContainerService
  ]
})
export class PatientsContainerModule { }
