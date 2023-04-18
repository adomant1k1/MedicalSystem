import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { DoctorType } from "../../../../../types";
import { Doctors } from "../../../config";

@Injectable()
export class DoctorsService {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _doctors$ = new BehaviorSubject<any[]>([]);

    public readonly doctors$ = this._doctors$.asObservable();

    public loadDoctors(): void {
        this._loading$.next(true);
        this._doctors$.next(Doctors);
        this._loading$.next(false);
    }

    public getDoctorById(id: number | string): DoctorType | null {
        return this._doctors$.value.find(it => it.id === id) ?? null;
    }
}