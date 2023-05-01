import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { filter } from 'rxjs';

import { CreateQuestionnaireDialogComponent } from "../../../../shared";
import { QuestionnairesService } from "./services";
import { ActiveUserService } from '../../../../services';

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

    public get isDoctor(): boolean {
        return this.userService?.profile?.role === 'DOCTOR';
    }

    constructor(
        private readonly userService: ActiveUserService,
        private readonly service: QuestionnairesService,
        private readonly router: Router,
        public readonly dialog: MatDialog,
    ) {}

    public ngOnInit(): void {
        this.service.loadQuestionnaires(true);
        this.service.loadQuestionnaire();
    }

    public openQuestionnaire(id: number): void {
        this.router.navigateByUrl('questionnaires/' + id)
            .then();
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
        modalRef.afterClosed()
          .pipe(
            filter(it => it !== null && it !== undefined)
          )
          .subscribe(it => this.service.updateQuestionnaire({
              value: it,
              patientId: item.patientId,
              doctorId: item.doctorId,
              id: item.id
          }))
    }
}