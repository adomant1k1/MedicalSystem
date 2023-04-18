import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { MatDialogModule } from "@angular/material/dialog";

import { ProfileComponent } from "./profile.component";
import { UsernamePipe } from "../../pipes";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [ProfileComponent, ChangePasswordComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent
            }
        ]),
        ProgressSpinnerModule,
        CardModule,
        UsernamePipe,
        ButtonModule,
        MatDialogModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [],
})
export class ProfileModule {}