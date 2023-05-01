import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DoctorType } from "../../../../../types";
import { NotificationService } from '../../../../../components/notification/services';

@Injectable()
export class DoctorCardService implements OnDestroy {
    public doctorId!: number;
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

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

    public setDoctorId(val: number): void {
        this.doctorId = val;
    }

    public loadDoctor(): void {
        if (!this.doctorId) {
            throw new Error('Сначала заполните ID доктора');
        }

        this._loading$.next(true);
        const url = 'http://localhost:4000/user-service/doctors/' + this.doctorId
        this.http.get<DoctorType>(url)
          .pipe(
            finalize(() => this._loading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => this._doctor$.next(response));
    }



    public updateDoctor(doctor: DoctorType): void {
        const url = 'http://localhost:4000/user-service/doctors/' + doctor.id;
        this.http.post(url, { ...doctor })
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(() => {
              this.notificationService.showSuccessMessage('Доктор был успешно обновлен');
              this.loadDoctor();
          });
    }
}