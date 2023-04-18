import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";

import { ActiveUserService } from "../../services";

@Component({
    selector: 'app-global-header',
    templateUrl: './global-header.component.html',
    styleUrls: ['./global-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalHeaderComponent {
    constructor(
        private readonly router: Router,
        public readonly userService: ActiveUserService
    ) {}

    public logOut(): void {}

    public openProfile(): void {
        this.router.navigate(['/profile'])
            .then();
    }
}