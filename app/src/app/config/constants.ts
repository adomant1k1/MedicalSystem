import {QuestionnaireParamsWithEstimateBoundary} from "../types";

export const GENDERS = [
    {
        label: 'Танк',
        value: 'TANK'
    },
    {
        label: 'Вертолет',
        value: 'HELICOPTER'
    },
    {
        label: 'Мужчина',
        value: 'MAN'
    },
    {
        label: 'Женщина',
        value: 'WOMAN'
    }
];

export const Questionnaire: QuestionnaireParamsWithEstimateBoundary = {
    estimateBoundary: 0,
    parameters: [
        {
            name: 'Пол',
            options: [
                {
                    name: 'Женский',
                    value: 0
                },
                {
                    name: 'Мужской',
                    value: 1
                }
            ]
        },
        {
            name: 'Возраст',
            options: [
                {
                    name: 'Пожилой (60-74)',
                    value: 0
                },
                {
                    name: 'Не пожилой (0-60)',
                    value: 1
                }
            ]
        }
    ]
};

export const JobPlaces = [
    {
        id: 0,
        label: 'Больница № 1'
    },
    {
        id: 1,
        label: 'Больница № 2'
    },
    {
        id: 2,
        label: 'Больница № 3'
    },
    {
        id: 3,
        label: 'Больница № 4'
    },
    {
        id: 4,
        label: 'Больница № 5'
    }
];

export const JobTitles = [
    {
        id: 0,
        label: 'Педиатр'
    },
    {
        id: 1,
        label: 'Терапевт'
    },
    {
        id: 2,
        label: 'Реаниматолог'
    },
    {
        id: 3,
        label: 'Хирург'
    },
    {
        id: 4,
        label: 'Стоматолог'
    }
];