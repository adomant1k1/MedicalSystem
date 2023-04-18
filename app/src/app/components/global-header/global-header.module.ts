import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { GlobalHeaderComponent } from "./global-header.component";
import { T1uiIconModule } from "../icon";
import { UsernamePipe} from "../../pipes";

@NgModule({
    declarations: [GlobalHeaderComponent],
    imports: [
        CommonModule,
        T1uiIconModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        UsernamePipe
    ],
    exports: [GlobalHeaderComponent],
    providers: [UsernamePipe]
})
export class GlobalHeaderModule {}