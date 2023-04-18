import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PatientCardComponent, PatientsComponent } from "./pages";

const routes: Routes = [
    {
        path: '',
        component: PatientsComponent
    },
    {
        path: ':id',
        component: PatientCardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientsRoutingModule {}