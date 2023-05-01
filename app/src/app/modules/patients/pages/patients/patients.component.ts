import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { NewPatientDialogComponent } from "../new-patient-dialog";
import { PatientsService } from "../../../../services";
import { filter } from 'rxjs';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PatientsService]
})
export class PatientsComponent implements OnInit{
    public readonly loading$ = this.service.loading$;

    public readonly patients$ = this.service.patients$;

    constructor(
        public readonly dialog: MatDialog,
        public readonly router: Router,
        public readonly service: PatientsService
    ) {}

    public ngOnInit(): void {
        this.service.loadPatients();
    }

    public openPatientCard(id: string | number): void {
        this.router.navigateByUrl('patients/' + id)
            .then();
    }

    public addNewPatient(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            action: 'add'
        };
        const modalRef = this.dialog.open(NewPatientDialogComponent, dialogConfig);
        modalRef.afterClosed()
          .pipe(
            filter(it => it !== null && it !== undefined)
          )
          .subscribe((value) => {
              this.service.createNewPatient(value);
          })
    }
}