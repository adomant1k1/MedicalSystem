export type QuestionnaireParamsType = {
    title: string;
    value: string;
}

export type QuestionnaireOption = {
    name: string;
    value: number;
};

export type QuestionnaireParams = {
    name: string;
    options: QuestionnaireOption[];
}
