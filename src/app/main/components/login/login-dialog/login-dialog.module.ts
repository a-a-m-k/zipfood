import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputModule } from '../../../common/app-input/app-input.module';
import { LoginDialogComponent } from './login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    AppInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [
    LoginDialogComponent 
  ],
  exports: [
    LoginDialogComponent
  ]
})
export class LoginDialogModule { }
