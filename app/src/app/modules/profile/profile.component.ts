import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

import { ActiveUserService } from "../../services";
import { ChangePasswordComponent } from "./change-password/change-password.component";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _profile$ = new BehaviorSubject<any | null>(null);

    public readonly profile$ = this._profile$.asObservable();

    constructor(
        private readonly dialog: MatDialog,
        public readonly userService: ActiveUserService
    ) {}

    public ngOnInit(): void {
        this.userService.profile$
            .subscribe((it) => {
                if (!it) {
                    this._loading$.next(false);
                    return;
                }

                this._profile$.next(it);
                this._loading$.next(false);
            })
    }

    public changePassword(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(ChangePasswordComponent, dialogConfig)
    }
}