import { NgModule } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { MatIconModule} from "@angular/material/icon";
import { OrderListModule } from "primeng/orderlist";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CalendarModule } from "primeng/calendar";
import { TooltipModule} from "primeng/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

import { PatientsRoutingModule } from "./patients-routing.module";
import { UsernamePipe } from "../../pipes";
import { NewPatientDialogComponent, PatientCardComponent, PatientsComponent, CreateQuestionnaireDialogComponent } from "./pages";
import { AgePipe } from "../../pipes/age.pipe";

@NgModule({
    declarations: [PatientsComponent, PatientCardComponent, NewPatientDialogComponent, CreateQuestionnaireDialogComponent],
    imports: [
        CommonModule,
        PatientsRoutingModule,
        OrderListModule,
        AsyncPipe,
        ButtonModule,
        CardModule,
        UsernamePipe,
        ProgressSpinnerModule,
        CalendarModule,
        MatIconModule,
        TooltipModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        AgePipe
    ],
    providers: [AgePipe]
})
export class PatientsModule {}