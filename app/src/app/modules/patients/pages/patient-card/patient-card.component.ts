import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { take } from "rxjs";

import { PatientCardService } from "./services";
import { ActiveUserService } from "../../../../services";
import { RolesTypes } from "../../../../types";
import { EditPatientDialogComponent } from "../edit-patient-dialog";
import { CreateQuestionnaireDialogComponent } from "../../../../shared";

@Component({
    selector: 'app-patient-card',
    templateUrl: './patient-card.component.html',
    styleUrls: ['./patient-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PatientCardService]
})
export class PatientCardComponent implements OnInit {
    public readonly loading$ = this.service.loading$;

    public readonly patient$ = this.service.patient$;

    public readonly questionnaires$ = this.service.questionnaires$;

    public isAdmin!: boolean;

    constructor(
        public readonly dialog: MatDialog,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        public readonly service: PatientCardService,
        public readonly userService: ActiveUserService
    ) {}

    public ngOnInit(): void {
        this.userService.profile$.pipe(
            take(1),
        ).subscribe(it => this.isAdmin = it.role === RolesTypes.Admin);

        this.route.params.pipe(
            take(1),
        ).subscribe(it => {
            this.service.loadPatient(it['id']);
        })
    }

    public openQuestionnaire(id: number): void {
        this.router.navigateByUrl('questionnaires/' + id)
            .then();
    }

    public onFilterChange(event: unknown): void {
        console.log(event);
    }

    public addNewQuestionnaire(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {};
        const modalRef = this.dialog.open(CreateQuestionnaireDialogComponent, dialogConfig)
    }

    public editQuestionnaire(item: any): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            action: 'edit',
            value: item
        };
        const modalRef = this.dialog.open(CreateQuestionnaireDialogComponent, dialogConfig)
    }

    public editPatient(patient: any): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            value: patient
        };
        const modalRef = this.dialog.open(EditPatientDialogComponent, dialogConfig);
    }
}