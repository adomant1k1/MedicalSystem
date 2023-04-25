import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Patients, Questionnaires } from "../../../../../config";
import { PatientType, QuestionnaireType } from "../../../../../types";

@Injectable()
export class PatientCardService {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _questionnaires$ = new BehaviorSubject<QuestionnaireType[] | null>(null);

    public readonly questionnaires$ = this._questionnaires$.asObservable();

    private readonly _patient$ = new BehaviorSubject<PatientType | null>(null);

    public readonly patient$ = this._patient$.asObservable();

    public loadPatient(id: string | number): void {
        this._loading$.next(true);
        const patient = Patients.find(it => +it.id === +id);
        this._patient$.next(patient ?? null);
        this._questionnaires$.next(Questionnaires);
        this._loading$.next(false);
    }
}