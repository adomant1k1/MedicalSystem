import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { DoctorsService } from "./services";
import {NewDoctorDialogComponent} from "../new-doctor-dialog";

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DoctorsService]
})
export class DoctorsComponent implements OnInit {
    public readonly loading$ = this.service.loading$;

    public readonly doctors$ = this.service.doctors$;

    constructor(
        public readonly dialog: MatDialog,
        public readonly router: Router,
        public readonly service: DoctorsService
    ) {}

    public ngOnInit(): void {
        this.service.loadDoctors();
    }

    public openDoctorCard(id: string | number): void {
        this.router.navigateByUrl('doctors/' + id)
            .then();
    }

    public addNewDoctor(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            action: 'add'
        };
        const modalRef = this.dialog.open(NewDoctorDialogComponent, dialogConfig);
    }
}