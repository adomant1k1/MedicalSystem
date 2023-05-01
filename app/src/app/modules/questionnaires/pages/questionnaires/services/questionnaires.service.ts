import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, finalize, map, Subject, takeUntil } from 'rxjs';

import { QuestionnaireParamsWithEstimateBoundary, QuestionnaireType } from "../../../../../types";
import { Questionnaire, Questionnaires } from "../../../../../config";
import { HttpClient, HttpParams } from '@angular/common/http';
import { NotificationService } from '../../../../../components/notification/services';

@Injectable()
export class QuestionnairesService implements OnDestroy {
    private readonly _questionnaire$ = new BehaviorSubject<any | null>(null);

    public readonly questionnaire$ = this._questionnaire$.asObservable();

    private readonly _questionnaires$ = new BehaviorSubject<QuestionnaireType[]>([]);

    public readonly questionnaires$ = this._questionnaires$.asObservable();

    private readonly _questionnaireLoading$ = new BehaviorSubject<boolean>(true);

    private readonly _questionnairesLoading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = combineLatest([this._questionnaireLoading$, this._questionnairesLoading$])
        .pipe(
            map(([x, y]) => x || y)
        );

    private destroy$ = new Subject<void>();

    public get questionnaireTemplateRawData(): QuestionnaireType | null {
        return this._questionnaire$.value;
    }

    constructor(private readonly http: HttpClient,
                private readonly notificationService: NotificationService
    ) {}

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }


    public loadQuestionnaire(): void {
        this._questionnaireLoading$.next(true);
        this.http.get('http://localhost:4000/questionnaire-service/questionnaire-template')
          .pipe(
            finalize(() => this._questionnaireLoading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => {
              this._questionnaire$.next(response as any);
          });
    }

    public loadQuestionnaires(showLoading?: boolean): void {
        if (showLoading) {
            this._questionnaireLoading$.next(true);
        }

        this.http.get<QuestionnaireType[]>('http://localhost:4000/questionnaire-service/questionnaire')
          .pipe(
            finalize(() => showLoading ? this._questionnairesLoading$.next(false) : () => {}),
            takeUntil(this.destroy$)
          )
          .subscribe((response) =>  this._questionnaires$.next(response));
    }

    public updateQuestionnaire(event: any): void {
        const body = {
            patientId: event.patientId,
            doctorId: event.doctorId,
            parameters: event.value
        };
        this.http.post('http://localhost:4000/questionnaire-service/questionnaire', body)
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(() => {
              this.notificationService.showSuccessMessage('Анкета ' + event.id + ' обновлена успешно')
              this.loadQuestionnaires();
          });
    }
}