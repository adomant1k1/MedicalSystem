import { QuestionnaireParams, QuestionnaireParamsType } from "./questionnaire-params.types";

export type QuestionnaireType = {
    id: number;
    date: string;
    patientId: number;
    doctorId: number;
    parameters: QuestionnaireParamsType[];
    points: number;
    result: string;
    valid: boolean;
}

export type QuestionnaireParamsWithEstimateBoundary = {
    parameters: QuestionnaireParams[];
    estimateBoundary: number;
}