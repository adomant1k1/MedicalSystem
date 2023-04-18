export type QuestionnaireParamsType = {
    title: string;
    value: string;
    points: number;
}

export type QuestionnaireParams = {
    name: string;
    options: {
        name: string;
        value: number;
    }[];
}