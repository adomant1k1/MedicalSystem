import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { DoctorCardComponent, DoctorsComponent } from "./pages";

const routes: Routes = [
    {
        path: '',
        component: DoctorsComponent
    },
    {
        path: ':id',
        component: DoctorCardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorsRoutingModule {}