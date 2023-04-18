import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TooltipModule } from "primeng/tooltip";

import { NavbarComponent } from "./navbar.component";
import { StaticPipe} from "../../pipes";
import { T1uiIconModule } from "../icon";


@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, StaticPipe, RouterModule, T1uiIconModule, TooltipModule],
    exports: [NavbarComponent]
})
export class NavbarModule {}