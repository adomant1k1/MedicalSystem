import { PatientType } from "./patient.types";
import { DoctorType } from "./doctor.types";
import { QuestionnaireParams, QuestionnaireParamsType } from "./questionnaire-params.types";

export type QuestionnaireType = {
    id: number;
    date: string;
    patient: PatientType;
    doctor: DoctorType;
    parameters: QuestionnaireParamsType[];
    points: number;
    result: string;
    old: boolean;
}

export type QuestionnaireParamsWithEstimateBoundary = {
    parameters: QuestionnaireParams[];
    estimateBoundary: number;
}