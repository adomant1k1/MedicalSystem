import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';

import { NotificationService } from '../components/notification/services';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionnaireService implements OnDestroy {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _questionnaire$ = new BehaviorSubject<any | null>(null);

    public readonly questionnaire$ = this._questionnaire$.asObservable();

    private destroy$ = new Subject<void>();

    constructor(
      public readonly notificationService: NotificationService,
      private readonly http: HttpClient
    ) {}

    public ngOnDestroy(): void {
       this.destroy$.next();
       this.destroy$.complete();
    }

    public loadQuestionnaire(): void {
        this._loading$.next(true);

        this.http.get('http://localhost:4000/questionnaire-service/questionnaire-template')
          .pipe(
            finalize(() => this._loading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => {
            this._questionnaire$.next(response);
          });
    }

    public saveQuestionnaire(value: any): void {
      this.http.put('http://localhost:4000/questionnaire-service/questionnaire-template', { ...value })
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
            this.loadQuestionnaire();
            this.notificationService.showSuccessMessage('Анкета успешно обновлена');
        });
    }
}