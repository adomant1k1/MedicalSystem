import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";

import { CreateQuestionnaireDialogComponent } from "../../../../shared";
import { QuestionnairesService } from "./services";

@Component({
    selector: 'app-questionnaires',
    templateUrl: './questionnaires.component.html',
    styleUrls: ['./questionnaires.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [QuestionnairesService]
})
export class QuestionnairesComponent implements OnInit {
    public readonly loading$ = this.service.loading$;

    public readonly questionnaires$ = this.service.questionnaires$;

    constructor(
        private readonly service: QuestionnairesService,
        private readonly router: Router,
        public readonly dialog: MatDialog,
    ) {}

    public ngOnInit(): void {
        this.service.loadQuestionnaires();
        this.service.loadQuestionnaire();
    }

    public openQuestionnaire(id: number): void {
        this.router.navigateByUrl('questionnaires/' + id)
            .then();
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
}