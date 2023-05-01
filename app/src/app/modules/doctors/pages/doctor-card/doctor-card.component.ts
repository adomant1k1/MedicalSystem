import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { DoctorCardService } from "./services";
import {EditDoctorDialogComponent} from "../edit-doctor-dialog";
import { filter } from 'rxjs';

@Component({
    selector: 'app-doctor-card',
    templateUrl: './doctor-card.component.html',
    styleUrls: ['./doctor-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DoctorCardService]
})
export class DoctorCardComponent implements OnInit {
    public readonly loading$ = this.service.loading$;

    public readonly doctor$ = this.service.doctor$;

    constructor(
        public readonly dialog: MatDialog,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        public readonly service: DoctorCardService
    ) {}

    public ngOnInit(): void {
        this.route.params.subscribe(it => {
            this.service.setDoctorId(it['id']);
            this.service.loadDoctor();
        })
    }

    public editDoctor(doctor: any): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            value: doctor
        };
        const modalRef = this.dialog.open(EditDoctorDialogComponent, dialogConfig);
        modalRef.afterClosed()
          .pipe(
            filter(it => it !== null && it !== undefined)
          )
          .subscribe((response) => this.service.updateDoctor(response));
    }
}
