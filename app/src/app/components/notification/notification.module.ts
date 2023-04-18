import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesModule } from "primeng/messages";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

import { NotificationComponent } from "./notification.component";

@NgModule({
    declarations: [NotificationComponent],
    imports: [CommonModule, MessagesModule, AccordionModule, ButtonModule, RippleModule],
    exports: [
        NotificationComponent
    ]
})
export class NotificationModule {}