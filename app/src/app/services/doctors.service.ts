import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Doctors } from "../config";
import { DoctorType } from "../types";

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

    public getDoctorById(id: number): DoctorType | null {
        const val = this._doctors$.value && this._doctors$.value.length > 0 ? this._doctors$.value : Doctors;
        return val.find(it => it.id === id) ?? null;
    }
}