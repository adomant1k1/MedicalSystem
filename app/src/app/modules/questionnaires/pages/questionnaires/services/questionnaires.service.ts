import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map } from "rxjs";

import { QuestionnaireParamsWithEstimateBoundary, QuestionnaireType } from "../../../../../types";
import { Questionnaire, Questionnaires } from "../../../../../config";

@Injectable()
export class QuestionnairesService {
    private readonly _questionnaire$ = new BehaviorSubject<QuestionnaireParamsWithEstimateBoundary | null>(null);

    public readonly questionnaire$ = this._questionnaire$.asObservable();

    private readonly _questionnaires$ = new BehaviorSubject<QuestionnaireType[]>([]);

    public readonly questionnaires$ = this._questionnaires$.asObservable();

    private readonly _questionnaireLoading$ = new BehaviorSubject<boolean>(true);

    private readonly _questionnairesLoading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = combineLatest([this._questionnaireLoading$, this._questionnairesLoading$])
        .pipe(
            map(([x, y]) => x || y)
        )

    public loadQuestionnaire(): void {
        this._questionnaireLoading$.next(true);
        this._questionnaire$.next(Questionnaire);
        this._questionnaireLoading$.next(false);
    }

    public loadQuestionnaires(): void {
        this._questionnairesLoading$.next(true);
        this._questionnaires$.next(Questionnaires);
        console.log(Questionnaires);
        this._questionnairesLoading$.next(false);
    }
}