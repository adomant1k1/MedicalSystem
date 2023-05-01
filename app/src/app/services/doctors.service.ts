import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DoctorType, PatientType } from '../types';
import { NotificationService } from '../components/notification/services';

@Injectable()
export class DoctorsService implements OnDestroy {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _doctors$ = new BehaviorSubject<any[]>([]);

    public readonly doctors$ = this._doctors$.asObservable();

    private readonly _doctor$ = new BehaviorSubject<DoctorType | null>(null);

    public readonly doctor$ = this._doctor$.asObservable();

    private destroy$ = new Subject<void>();

    constructor(
      private readonly http: HttpClient,
      private readonly notificationService: NotificationService
    ) {}

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public loadDoctors(): void {
        this._loading$.next(true);
        this.http.get<DoctorType[]>('http://localhost:4000/user-service/doctors')
          .pipe(
            finalize(() => this._loading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => this._doctors$.next(response));
    }

    public getDoctorById(id: number): void {
        this.http.get<DoctorType>('http://localhost:4000/user-service/doctors/' + id)
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe((response) => this._doctor$.next(response));
    }

    public addNewDoctor(response: Partial<DoctorType>): void {
        this.http.put('http://localhost:4000/user-service/doctors', { ...response })
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(() => {
              this.notificationService.showSuccessMessage('Доктор успешно добавлен');
              this.loadDoctors();
          })
    }
}