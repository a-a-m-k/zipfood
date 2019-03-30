import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from "../login/login.module";
import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [
    CommonModule,
	LoginModule
  ],
  declarations: [
    OverviewComponent
  ],
  exports: [
    OverviewComponent
  ]
})
export class OverviewModule { }
