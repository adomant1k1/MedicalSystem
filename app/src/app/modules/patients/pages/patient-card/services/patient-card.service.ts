import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { PatientType, QuestionnaireType } from '../../../../../types';
import { NotificationService } from '../../../../../components/notification/services';
import { ActiveUserService } from '../../../../../services';

@Injectable()
export class PatientCardService implements OnDestroy {
    public patientId!: number;
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _questionnaires$ = new BehaviorSubject<QuestionnaireType[] | null>(null);

    public readonly questionnaires$ = this._questionnaires$.asObservable();

    private readonly _patient$ = new BehaviorSubject<PatientType | null>(null);

    public readonly patient$ = this._patient$.asObservable();

    private destroy$ = new Subject<void>();

    constructor(
      private readonly userService: ActiveUserService,
      private readonly http: HttpClient,
      private readonly notificationService: NotificationService
    ) {}

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public setPatientId(val: number): void {
        this.patientId = val;
    }

    public loadPatient(): void {
        if (!this.patientId) {
            throw new Error('Сначала заполните ID пациента');
        }

        this._loading$.next(true);
        const url = 'http://localhost:4000/user-service/patients/' + this.patientId
        this.http.get<PatientType>(url)
          .pipe(
            finalize(() => this._loading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => {
              this._patient$.next(response);
              this.loadQuestionnaires();
          });
    }

    public updatePatient(patient: PatientType): void {
        const url = 'http://localhost:4000/user-service/patients/' + patient.id;
        this.http.post(url, { ...patient })
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(() => {
              this.notificationService.showSuccessMessage('Пациент был успешно обновлен');
              this.loadPatient();
          });
    }

    public loadQuestionnaires(): void {
        const params = new HttpParams();
        params.set('patientId', this.patientId)
        this.http.get<QuestionnaireType[]>('http://localhost:4000/questionnaire-service/questionnaire', { params })
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe((response) =>  this._questionnaires$.next(response));
    }

    public addNewQuestionnaire(questionnaire: any): void {
        const body = {
            patientId: +this.patientId,
            doctorId: +this.userService.profile.id,
            parameters: questionnaire
        }
        this.http.post('http://localhost:4000/questionnaire-service/questionnaire', body)
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(() => {
              this.notificationService.showSuccessMessage('Новая анкета добавлена успешно')
              this.loadQuestionnaires();
          });
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