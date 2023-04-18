import { Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { DoctorType } from "../../../../../types";
import { Doctors } from "../../../config";

@Injectable()
export class DoctorCardService {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _doctor$ = new BehaviorSubject<DoctorType | null>(null);

    public readonly doctor$ = this._doctor$.asObservable();

    public loadDoctor(id: string | number): void {
        this._loading$.next(true);
        const doctor = Doctors.find(it => +it.id === +id);
        this._doctor$.next(doctor ?? null);
        this._loading$.next(false);
    }
}