import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportComponent } from './viewport.component';
import { AppRoutingModule } from '../../../app.routing';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ViewportComponent],
  exports: [ViewportComponent]
})
export class ViewportModule { }
