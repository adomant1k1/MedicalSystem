import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { CreateQuestionnaireDialogComponent } from "./create-questionnaire-dialog.component";

@NgModule({
    declarations: [CreateQuestionnaireDialogComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        ProgressSpinnerModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule
    ],
    exports: [CreateQuestionnaireDialogComponent]
})
export class CreateQuestionnaireDialogModule {

}
