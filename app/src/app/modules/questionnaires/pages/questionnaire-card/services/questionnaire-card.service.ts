import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Questionnaires } from "src/app/modules/patients/config";
import { QuestionnaireType } from "../../../../../types";

@Injectable()
export class QuestionnaireCardService {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    private readonly _questionnaire$ = new BehaviorSubject<QuestionnaireType | null>(null);

    public readonly questionnaire$ = this._questionnaire$.asObservable();

    public loadQuestionnaire(id: number): void {
        this._loading$.next(true);
        this._questionnaire$.next(Questionnaires.find(it => +it.id === +id) ?? null);
        this._loading$.next(false);
    }
}