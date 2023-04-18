import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { CardModule } from "primeng/card";
import { TooltipModule } from "primeng/tooltip";
import { ButtonModule } from "primeng/button";
import { ProgressSpinnerModule } from "primeng/progressspinner";

import { QuestionnairesRoutingModule } from "./questionnaires-routing.module";
import { UsernamePipe} from "../../pipes";
import { QuestionnaireCardComponent, QuestionnairesComponent } from "./pages";
import {AgePipe} from "../../pipes/age.pipe";


@NgModule({
    declarations: [QuestionnairesComponent, QuestionnaireCardComponent],
    imports: [
        CommonModule,
        QuestionnairesRoutingModule,
        CardModule,
        UsernamePipe,
        TooltipModule,
        ButtonModule,
        MatIconModule,
        ProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDialogModule,
        AgePipe
    ]
})
export class QuestionnairesModule {}