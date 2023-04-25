import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { PatientType } from "../types";
import { Patients } from "../config";

@Injectable()
export class PatientsService {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _patients$ = new BehaviorSubject<any[]>([]);

    public readonly patients$ = this._patients$.asObservable();

    public loadPatients(): void {
        this._loading$.next(true);
        this._patients$.next(Patients);
        this._loading$.next(false);
    }

    public getPatientById(id: number): PatientType | null {
        const val = this._patients$.value && this._patients$.value.length > 0 ? this._patients$.value : Patients;
        return val.find(it => it.id === id) ?? null;
    }
}