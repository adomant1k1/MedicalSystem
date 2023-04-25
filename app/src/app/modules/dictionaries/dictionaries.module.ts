import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TabViewModule } from "primeng/tabview";
import { OrderListModule } from "primeng/orderlist";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { TooltipModule } from "primeng/tooltip";
import { ButtonModule } from "primeng/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

import { DictionariesComponent, AddDictionaryItemComponent, EditDictionaryItemComponent } from "./pages";

@NgModule({
    declarations: [DictionariesComponent, AddDictionaryItemComponent, EditDictionaryItemComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: DictionariesComponent
            }
        ]),
        TabViewModule,
        OrderListModule,
        ProgressSpinnerModule,
        TooltipModule,
        ButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [DictionariesComponent],
})
export class DictionariesModule {}