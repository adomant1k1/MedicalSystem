import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, combineLatest, map } from "rxjs";

import { JobPlaces, JobTitles } from "../config";

@Injectable()
export class DictionariesService {
    private readonly _jobTitlesLoading$ = new BehaviorSubject<boolean>(false);

    public readonly jobTitlesLoading$ = this._jobTitlesLoading$.asObservable();

    private readonly _jobPlacesLoading$ = new BehaviorSubject<boolean>(false);

    public readonly jobPlacesLoading$ = this._jobPlacesLoading$.asObservable();

    public readonly loading$ = combineLatest([this.jobTitlesLoading$, this.jobPlacesLoading$]).pipe(
        map(([jobTitlesLoading, jobPlacesLoading]) => jobTitlesLoading && jobPlacesLoading)
    )

    private readonly _jobTitles$ = new BehaviorSubject<any[]>([]);

    public readonly jobTitles$ = this._jobTitles$.asObservable();

    private readonly _jobPlaces$ = new BehaviorSubject<any[]>([]);

    public readonly jobPlaces$ = this._jobPlaces$.asObservable();

    constructor(private readonly http: HttpClient) {}

    public loadData(): void {
        this.loadJobPlaces();
        this.loadJobTitles();
    }

    public loadJobTitles(): void {
        this._jobTitlesLoading$.next(true);
        this._jobTitles$.next(JobTitles.map(it => ({ id: it.id, label: it.jobTitle })));
        this._jobTitlesLoading$.next(false);
    }

    public loadJobPlaces(): void {
        this._jobPlacesLoading$.next(true);
        this._jobPlaces$.next(JobPlaces.map(it => ({ id: it.id, label: it.jobPlace })));
        this._jobPlacesLoading$.next(false);
    }
}