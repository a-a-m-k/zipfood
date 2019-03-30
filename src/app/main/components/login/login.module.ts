import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule, } from "@angular/material";
import { LoginDialogModule } from "./login-dialog/login-dialog.module";
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    LoginDialogModule,
    HttpClientModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  entryComponents: [LoginDialogComponent]
})
export class LoginModule { }
