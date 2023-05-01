import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';

import { DoctorType, PatientType } from '../types';
import { Patients } from "../config";
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../components/notification/services';

@Injectable()
export class PatientsService implements OnDestroy {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _patient$ = new BehaviorSubject<PatientType | null>(null);

    public readonly patient$ = this._patient$.asObservable();

    private readonly _patients$ = new BehaviorSubject<PatientType[]>([]);

    public readonly patients$ = this._patients$.asObservable();

    private destroy$ = new Subject<void>();

    constructor(
      private readonly http: HttpClient,
      private readonly notificationService: NotificationService
    ) {}

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public loadPatients(): void {
        this._loading$.next(true);
       this.http.get<PatientType[]>('http://localhost:4000/user-service/patients')
         .pipe(
           finalize(() => this._loading$.next(false)),
           takeUntil(this.destroy$)
         )
         .subscribe((response) => this._patients$.next(response));
    }

    public createNewPatient(patient: Partial<PatientType>): void {
        this.http.put('http://localhost:4000/user-service/patients', { ...patient })
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(() => {
              this.notificationService.showSuccessMessage('Пациент успешно создан');
              this.loadPatients();
          });
    }

    public getPatientById(id: number): void {
        this._loading$.next(true);

        this.http.get<PatientType>('http://localhost:4000/user-service/patients/' + id)
          .pipe(
            finalize(() => this._loading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => this._patient$.next(response));
    }
}