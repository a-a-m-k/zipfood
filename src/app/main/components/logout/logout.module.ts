import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { MatButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    LogoutComponent 
  ],
  exports: [
    LogoutComponent
  ],
  providers: []
})
export class LogoutModule { }
