import {
    PatientType,
    QuestionnaireParamsWithEstimateBoundary,
    QuestionnaireType
} from "../types";

export const GENDERS = [
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

export const Patients: PatientType[] = [
    {
        id: 0,
        firstName: "Васильев",
        "lastName": "Василий",
        "middleName": "Васильевич",
        "birthDate": "1969-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 1,
        "firstName": "Пупов",
        "lastName": "Пуп",
        "middleName": "Землиевич",
        "birthDate": "2002-07-03",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 2,
        "firstName": "Лупов",
        "lastName": "Константи",
        "middleName": "Валерьевич",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 3,
        "firstName": "Дупов",
        "lastName": "Василий",
        "middleName": "Васильевич",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 4,
        "firstName": "Фантазиев",
        "lastName": "Иссыхай",
        "middleName": "Семеныч",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 5,
        "firstName": "Фантазиев",
        "lastName": "Иссыхай",
        "middleName": "Семеныч",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 6,
        "firstName": "Фантазиев",
        "lastName": "Иссыхай",
        "middleName": "Семеныч",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 7,
        "firstName": "Фантазиев",
        "lastName": "Иссыхай",
        "middleName": "Семеныч",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 8,
        "firstName": "Закрывае",
        "lastName": "Гештальт",
        "middleName": "Ольгович",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 9,
        "firstName": "Денег",
        "lastName": "Нет",
        "middleName": "Прорвемсеемов",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 10,
        "firstName": "Фантазиев",
        "lastName": "Иссыхай",
        "middleName": "Семеныч",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 11,
        "firstName": "Покрывалкина",
        "lastName": "Анжелика",
        "middleName": "Карась Оглы",
        "birthDate": "2022-06-02",
        "gender": "WOMAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 12,
        "firstName": "Самосвалова",
        "lastName": "Людмила",
        "middleName": "Борисовна",
        "birthDate": "2022-06-02",
        "gender": "WOMAN",
        "oms": "1234567891234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 13,
        "firstName": "Крышкин",
        "lastName": "Бутылка",
        "middleName": "Горлышкин",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "134534567234567",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    },
    {
        id: 14,
        "firstName": "Перышкин",
        "lastName": "Макарон",
        "middleName": "Спагетьевич",
        "birthDate": "2022-06-02",
        "gender": "MAN",
        "oms": "345346345874234",
        phone: '+712312312',
        email: 'valera@yandex.ru'
    }
];

export const Questionnaires: QuestionnaireType[] = [
    {
        id: 2,
        "date": "2022-05-06",
        valid: true,
        patientId: 0,
        doctorId: 0,
        "parameters": [
            {
                "title": "Пол",
                "value": "Мужской"
            },
            {
                "title": "Возраст",
                "value": "Пожилой (60-74)"
            },
            {
                "title": "Предшествующие операции на сердце и магистральных сосудах",
                "value": "Нет"
            },
            {
                "title": "Лапаротомии в анамнезе, не связанные с данным заболеванием",
                "value": "Да"
            },
            {
                "title": "Цереброваскулярные и/или сердечно-сосудистые заболевания",
                "value": "Нарушение ритма"
            },
            {
                "title": "Прием антикоагулянтов и дезагрегантов",
                "value": "Нет"
            },
            {
                "title": "Шкала Глазго, баллы",
                "value": "15-14"
            },
            {
                "title": "Среднее АД, мм рт ст",
                "value": "Более 70"
            },
            {
                "title": "Пульс",
                "value": "110 и менее"
            },
            {
                "title": "ХОБЛ",
                "value": "Да"
            },
            {
                "title": "Сахарный диабет",
                "value": "1 тип"
            },
            {
                "title": "ИМТ, кг/м2",
                "value": "30 и менее"
            },
            {
                "title": "Хроническая венозная недостаточность (С2-С6 по СЕАР)",
                "value": "Да"
            },
            {
                "title": "Длительность ОКН до поступления",
                "value": "Позже 24 часов"
            },
            {
                "title": "Эритроциты, х1012/л",
                "value": "<2,5"
            },
            {
                "title": "Гемоглобин, г/л",
                "value": "83-100"
            },
            {
                "title": "Гематокрит, %",
                "value": "30-45%"
            },
            {
                "title": "Тромбоциты, х103/л",
                "value": "менее 150"
            },
            {
                "title": "Лейкоциты, х109/л",
                "value": "3-15"
            },
            {
                "title": "ЧДД в минуту",
                "value": "12-24"
            },
            {
                "title": "Общий белок, г/л",
                "value": "менее 65"
            },
            {
                "title": "Альбумин, г/л",
                "value": "менее 35"
            },
            {
                "title": "Мочевина, ммоль/л",
                "value": "11-30"
            },
            {
                "title": "Креатинин, мкмоль/л",
                "value": "110-170"
            },
            {
                "title": "Суточный диурез, л",
                "value": "0,7 и менее"
            },
            {
                "title": "Билирубин, мкмоль/л",
                "value": "21-32"
            }
        ],
        "points": 20,
        "result": "Высокий риск выполнения первичной резекции кишки с опухолью"
    },
    {
        id: 3,
        "date": "2022-05-06",
        valid: false,
        patientId: 3,
        doctorId: 0,
        "parameters": [
            {
                "title": "Пол",
                "value": "Женский"
            },
            {
                "title": "Возраст",
                "value": "Не пожилой (0-60)"
            },
            {
                "title": "Предшествующие операции на сердце и магистральных сосудах",
                "value": "Нет"
            },
            {
                "title": "Лапаротомии в анамнезе, не связанные с данным заболеванием",
                "value": "Да"
            },
            {
                "title": "Цереброваскулярные и/или сердечно-сосудистые заболевания",
                "value": "Нарушение ритма"
            },
            {
                "title": "Прием антикоагулянтов и дезагрегантов",
                "value": "Нет"
            },
            {
                "title": "Шкала Глазго, баллы",
                "value": "15-14"
            },
            {
                "title": "Среднее АД, мм рт ст",
                "value": "Более 70"
            },
            {
                "title": "Пульс",
                "value": "110 и менее"
            },
            {
                "title": "ХОБЛ",
                "value": "Да"
            },
            {
                "title": "Сахарный диабет",
                "value": "1 тип"
            },
            {
                "title": "ИМТ, кг/м2",
                "value": "30 и менее"
            },
            {
                "title": "Хроническая венозная недостаточность (С2-С6 по СЕАР)",
                "value": "Да"
            },
            {
                "title": "Длительность ОКН до поступления",
                "value": "Позже 24 часов"
            },
            {
                "title": "Эритроциты, х1012/л",
                "value": "<2,5"
            },
            {
                "title": "Гемоглобин, г/л",
                "value": "83-100"
            },
            {
                "title": "Гематокрит, %",
                "value": "30-45%"
            },
            {
                "title": "Тромбоциты, х103/л",
                "value": "менее 150"
            },
            {
                "title": "Лейкоциты, х109/л",
                "value": "3-15"
            },
            {
                "title": "ЧДД в минуту",
                "value": "12-24"
            },
            {
                "title": "Общий белок, г/л",
                "value": "менее 65"
            },
            {
                "title": "Альбумин, г/л",
                "value": "менее 35"
            },
            {
                "title": "Мочевина, ммоль/л",
                "value": "11-30"
            },
            {
                "title": "Креатинин, мкмоль/л",
                "value": "110-170"
            },
            {
                "title": "Суточный диурез, л",
                "value": "0,7 и менее"
            },
            {
                "title": "Билирубин, мкмоль/л",
                "value": "21-32"
            }
        ],
        "points": 20,
        "result": "Высокий риск выполнения первичной резекции кишки с опухолью"
    }
];
