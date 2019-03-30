import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing';

import { MainComponent } from './main.component';
import { MenuComponent } from './common/menu/menu.component';
import { PatientsContainerModule } from './containers/patients-container/patients-container.module';
import { ViewportModule } from './containers/viewport/viewport.module';
import { AdminModule} from './components/admin/admin.module';
import { HeaderModule } from './components/header/header.module';
import { OverviewModule } from './components/overview/overview.module';

@NgModule({
  imports: [
    CommonModule,
    PatientsContainerModule,
    AppRoutingModule,
    ViewportModule,
    AdminModule,
    HeaderModule,
    OverviewModule
  ],
  declarations: [
    MainComponent,
    MenuComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
