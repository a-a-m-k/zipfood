import { NgModule } from '@angular/core';
import { AppInputComponent } from './app-input.component';
import { MatFormFieldModule, MatInputModule } from "@angular/material";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AppInputComponent
  ],
  exports: [
    AppInputComponent
  ]
})
export class AppInputModule { }
