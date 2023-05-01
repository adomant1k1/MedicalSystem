import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';

import { Questionnaires } from "../../../../../config";
import { QuestionnaireType } from "../../../../../types";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionnaireCardService implements OnDestroy {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    public readonly loadDoctor$ = new BehaviorSubject<number | null>(null);

    public readonly loadPatient$ = new BehaviorSubject<number | null>(null);

    private readonly _questionnaire$ = new BehaviorSubject<QuestionnaireType | null>(null);

    public readonly questionnaire$ = this._questionnaire$.asObservable();

    private destroy$ = new Subject<void>();

    constructor(private readonly http: HttpClient) {}

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public loadQuestionnaire(id: number | null): void {
        if (!id) {
            throw new Error('Provide id to load questionnaire');
        }

        this._loading$.next(true);

        this.http.get('http://localhost:4000/questionnaire-service/questionnaire/' + id)
          .pipe(
            finalize(() => this._loading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response: Record<string, any>) => {
              if (response) {
                  this.loadDoctor$.next(response['doctorId']);
                  this.loadPatient$.next(response['patientId']);
                  this._questionnaire$.next(response as QuestionnaireType);
              }
          });
    }
}