import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";

import { QuestionnaireComponent } from "./questionnaire.component";
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
    declarations: [QuestionnaireComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: QuestionnaireComponent
            }
        ]),
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        ButtonModule,
        TooltipModule,
        ProgressSpinnerModule,
    ],
    exports: [QuestionnaireComponent]
})
export class QuestionnaireModule {}