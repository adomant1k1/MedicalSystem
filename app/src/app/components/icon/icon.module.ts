import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { IconComponent } from "./icon.component";
import { StaticPipe } from "../../pipes";

@NgModule({
    declarations: [IconComponent],
    exports: [IconComponent],
    imports: [CommonModule, HttpClientModule, StaticPipe]
})
export class T1uiIconModule {}