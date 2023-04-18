import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TabViewModule } from "primeng/tabview";
import { OrderListModule } from "primeng/orderlist";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { TooltipModule } from "primeng/tooltip";
import { ButtonModule } from "primeng/button";
import { MatIconModule } from "@angular/material/icon";

import { DictionariesComponent } from "./pages/dictionaries/dictionaries.component";
import { AddDictionaryItemComponent } from "./pages/add-dictionary-item/add-dictionary-item.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [DictionariesComponent, AddDictionaryItemComponent],
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