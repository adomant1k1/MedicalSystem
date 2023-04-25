import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Questionnaires } from "../../../../../config";
import { QuestionnaireType } from "../../../../../types";

@Injectable()
export class QuestionnaireCardService {
    private readonly _loading$ = new BehaviorSubject<boolean>(true);

    public readonly loading$ = this._loading$.asObservable();

    public readonly loadDoctor$ = new BehaviorSubject<number | null>(null);

    public readonly loadPatient$ = new BehaviorSubject<number | null>(null);

    private readonly _questionnaire$ = new BehaviorSubject<QuestionnaireType | null>(null);

    public readonly questionnaire$ = this._questionnaire$.asObservable();

    public loadQuestionnaire(id: number | null): void {
        if (!id) {
            throw new Error('Provide id to load questionnaire');
        }

        this._loading$.next(true);
        const questionnaire = Questionnaires.find(it => +it.id === +id) ?? null;
        this._questionnaire$.next(questionnaire);
        if (questionnaire) {
            this.loadDoctor$.next(questionnaire.doctorId);
            this.loadPatient$.next(questionnaire.patientId);
        }

        this._loading$.next(false);
    }
}