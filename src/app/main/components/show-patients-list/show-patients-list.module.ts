import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ShowPatientsListComponent } from './show-patients-list.component';
import { ShowPatientsListService } from './show-patients-list.service';

@NgModule({
  declarations: [
    ShowPatientsListComponent
  ],
  imports: [
    MatListModule,
    CommonModule
  ],
  exports: [
    ShowPatientsListComponent
  ],
  providers: [
    ShowPatientsListService
  ]
})
export class ShowPatientsListModule { }