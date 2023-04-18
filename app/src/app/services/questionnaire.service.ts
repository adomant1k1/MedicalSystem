import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Questionnaire } from "../config";

@Injectable()
export class QuestionnaireService {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _questionnaire$ = new BehaviorSubject<any | null>(null);

    public readonly questionnaire$ = this._questionnaire$.asObservable();

    public loadQuestionnaire(): void {
        this._loading$.next(true);
        this._questionnaire$.next(Questionnaire);
        this._loading$.next(false);
    }
}