import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { OrderListModule } from "primeng/orderlist";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CardModule } from "primeng/card";
import { TooltipModule } from "primeng/tooltip";
import { ButtonModule } from "primeng/button";
import { MatDialogModule} from "@angular/material/dialog";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatSelectModule} from "@angular/material/select";
import { ReactiveFormsModule} from "@angular/forms";
import { MatInputModule} from "@angular/material/input";

import { DoctorsRoutingModule } from "./doctors-routing.module";
import { UsernamePipe } from "../../pipes";
import { DoctorCardComponent, DoctorsComponent, EditDoctorDialogComponent, NewDoctorDialogComponent } from "./pages";

@NgModule({
    declarations: [
        DoctorsComponent,
        DoctorCardComponent,
        NewDoctorDialogComponent,
        EditDoctorDialogComponent
    ],
    imports: [
        CommonModule,
        DoctorsRoutingModule,
        OrderListModule,
        ProgressSpinnerModule,
        CardModule,
        UsernamePipe,
        TooltipModule,
        ButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    exports: [DoctorsComponent]
})
export class DoctorsModule {}