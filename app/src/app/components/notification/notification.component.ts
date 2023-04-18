import { ChangeDetectionStrategy, Component } from "@angular/core";

import { NotificationService } from "./services";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
    constructor(public notificationService: NotificationService) {}
}
