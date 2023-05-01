import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, combineLatest, finalize, map, Subject, takeUntil } from 'rxjs';

import { NotificationService } from '../components/notification/services';
import { JobPlaceDto, JobTitleDto } from '../types';

@Injectable()
export class DictionariesService implements OnDestroy {
    private readonly _jobTitlesLoading$ = new BehaviorSubject<boolean>(false);

    public readonly jobTitlesLoading$ = this._jobTitlesLoading$.asObservable();

    private readonly _jobPlacesLoading$ = new BehaviorSubject<boolean>(false);

    public readonly jobPlacesLoading$ = this._jobPlacesLoading$.asObservable();

    public readonly loading$ = combineLatest([this.jobTitlesLoading$, this.jobPlacesLoading$]).pipe(
        map(([jobTitlesLoading, jobPlacesLoading]) => jobTitlesLoading && jobPlacesLoading)
    )

    private readonly _jobTitles$ = new BehaviorSubject<{ id: number; label: string }[]>([]);

    public readonly jobTitles$ = this._jobTitles$.asObservable();

    private readonly _jobPlaces$ = new BehaviorSubject<{ id: number; label: string }[]>([]);

    public readonly jobPlaces$ = this._jobPlaces$.asObservable();

    private destroy$ = new Subject<void>();

    public get jobTitleRawData(): { id: number; label: string }[] {
        return this._jobTitles$.value;
    }

    public get jobPlaceRawData(): { id: number; label: string }[] {
        return this._jobPlaces$.value;
    }

    constructor(
      public readonly notificationService: NotificationService,
      private readonly http: HttpClient
    ) {}

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public loadData(): void {
        this.loadJobPlaces();
        this.loadJobTitles();
    }

    public loadJobTitles(): void {
        this._jobTitlesLoading$.next(true);

        this.http.get<JobTitleDto[]>("http://localhost:4000/user-service/dictionary/job-title")
          .pipe(
            finalize(() => this._jobTitlesLoading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => {
              this._jobTitles$.next(response.map(it => ({ id: it.id, label: it.name })));
          });
    }

    public loadJobPlaces(): void {
        this.http.get<JobPlaceDto[]>("http://localhost:4000/user-service/dictionary/job-place")
          .pipe(
            finalize(() => this._jobPlacesLoading$.next(false)),
            takeUntil(this.destroy$)
          )
          .subscribe((response) => {
              this._jobPlaces$.next(response.map(it => ({ id: it.id, label: it.name })));
          });
    }

    public createUrl(entity: string): string {
        return 'http://localhost:4000/user-service/dictionary/' + (entity === 'jobPlace' ? 'job-place' : 'job-title');
    }

    public updateEntity(value: any): void {
        const url = this.createUrl(value.entity) + '/' + value.id;
        this.http.post(url, { name: value.name })
          .pipe(
            takeUntil(this.destroy$)
          ).subscribe(() => {
            this.notificationService.showSuccessMessage(
              value.entity === 'jobPlace' ? 'Место работы успешно изменено' : 'Должность успешно изменена'
            );
            this.reloadEntityData(value.entity)

        });
    }

    public addEntity(value: any): void {
        const url = this.createUrl(value.entity);
        this.http.put(url, { name: value.name })
          .pipe(
            takeUntil(this.destroy$)
          ).subscribe(() => {
              this.notificationService.showSuccessMessage(
                value.entity === 'jobPlace' ? 'Место работы успешно создано' : 'Должность успешно создана'
              );
              this.reloadEntityData(value.entity)

        });
    }

    public reloadEntityData(entity: string) {
        if (entity === 'jobPlace') {
            this.loadJobPlaces();
        } else {
            this.loadJobTitles()
        }
    }
}