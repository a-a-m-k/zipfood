import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PatientsContainerComponent } from './main/containers/patients-container/patients-container.component';
import { AdminComponent } from './main/components/admin/admin.component';
import { OverviewComponent } from "./main/components/overview/overview.component";
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
    { path: "", component: OverviewComponent },
    { path: "overview", component: OverviewComponent },
    { path: "patients", component: PatientsContainerComponent, canActivate: [AuthGuard] },
    { path: "admin", component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule],
})

export class AppRoutingModule { }
  





