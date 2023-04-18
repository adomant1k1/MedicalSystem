import { PatientType, QuestionnaireType } from "../../../types";

export const Patients: PatientType[] = [
    {
        id: 0,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "1969-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 1,
        "firstname": "Пупов",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2002-07-03",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79498586655",
        email: 'valera@yandex.ru'
    },
    {
        id: 2,
        "firstname": "Лупов",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 3,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 4,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 5,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 6,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 7,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 8,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 9,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 10,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 11,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 12,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 13,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    },
    {
        id: 14,
        "firstname": "Васильев",
        "lastname": "Василий",
        "middlename": "Васильевич",
        "birthDay": "2022-06-02",
        "gender": "MAN",
        "oms": "1234567891234567",
        "phone": "+79998886655",
        email: 'valera@yandex.ru'
    }
];

export const Questionnaires: QuestionnaireType[] = [
    {
        "id": 2,
        "date": "2022-05-06",
        old: true,
        "patient": {
            id: 0,
            "firstname": "Василий",
            "lastname": "Васильев",
            "middlename": "Васильевич",
            "birthDay": "2022-06-02",
            "gender": "MAN",
            "oms": "1234567891234567",
            "phone": "79376492044",
            email: 'valera@yandex.ru'
        },
        "doctor": {
            id: 0,
            "firstname": "Иван",
            "lastname": "Иванов",
            "middlename": "Иванович",
            "jobTitle": "хирург",
            "jobPlace": "Больница",
            "phone": "+79996665544",
            email: 'valera@yandex.ru'
        },
        "parameters": [
            {
                "title": "Пол",
                "value": "Мужской",
                "points": 1
            },
            {
                "title": "Возраст",
                "value": "Пожилой (60-74)",
                "points": 0
            },
            {
                "title": "Предшествующие операции на сердце и магистральных сосудах",
                "value": "Нет",
                "points": -1
            },
            {
                "title": "Лапаротомии в анамнезе, не связанные с данным заболеванием",
                "value": "Да",
                "points": 3
            },
            {
                "title": "Цереброваскулярные и/или сердечно-сосудистые заболевания",
                "value": "Нарушение ритма",
                "points": 2
            },
            {
                "title": "Прием антикоагулянтов и дезагрегантов",
                "value": "Нет",
                "points": 0
            },
            {
                "title": "Шкала Глазго, баллы",
                "value": "15-14",
                "points": -1
            },
            {
                "title": "Среднее АД, мм рт ст",
                "value": "Более 70",
                "points": -2
            },
            {
                "title": "Пульс",
                "value": "110 и менее",
                "points": 0
            },
            {
                "title": "ХОБЛ",
                "value": "Да",
                "points": 4
            },
            {
                "title": "Сахарный диабет",
                "value": "1 тип",
                "points": 1
            },
            {
                "title": "ИМТ, кг/м2",
                "value": "30 и менее",
                "points": -2
            },
            {
                "title": "Хроническая венозная недостаточность (С2-С6 по СЕАР)",
                "value": "Да",
                "points": 0
            },
            {
                "title": "Длительность ОКН до поступления",
                "value": "Позже 24 часов",
                "points": 2
            },
            {
                "title": "Эритроциты, х1012/л",
                "value": "<2,5",
                "points": 3
            },
            {
                "title": "Гемоглобин, г/л",
                "value": "83-100",
                "points": -2
            },
            {
                "title": "Гематокрит, %",
                "value": "30-45%",
                "points": -2
            },
            {
                "title": "Тромбоциты, х103/л",
                "value": "менее 150",
                "points": 0
            },
            {
                "title": "Лейкоциты, х109/л",
                "value": "3-15",
                "points": 0
            },
            {
                "title": "ЧДД в минуту",
                "value": "12-24",
                "points": -2
            },
            {
                "title": "Общий белок, г/л",
                "value": "менее 65",
                "points": 3
            },
            {
                "title": "Альбумин, г/л",
                "value": "менее 35",
                "points": 3
            },
            {
                "title": "Мочевина, ммоль/л",
                "value": "11-30",
                "points": 4
            },
            {
                "title": "Креатинин, мкмоль/л",
                "value": "110-170",
                "points": 3
            },
            {
                "title": "Суточный диурез, л",
                "value": "0,7 и менее",
                "points": 4
            },
            {
                "title": "Билирубин, мкмоль/л",
                "value": "21-32",
                "points": 0
            }
        ],
        "points": 20,
        "result": "Высокий риск выполнения первичной резекции кишки с опухолью"
    },
    {
        "id": 3,
        "date": "2022-05-06",
        old: false,
        "patient": {
            id: 3,
            "firstname": "Василий",
            "lastname": "Васильев",
            "middlename": "Васильевич",
            "birthDay": "2022-06-02",
            "gender": "MAN",
            "oms": "1234567891234567",
            "phone": "79376492044",
            email: 'valera@yandex.ru'
        },
        "doctor": {
            id: 0,
            "firstname": "Иван",
            "lastname": "Иванов",
            "middlename": "Иванович",
            "jobTitle": "хирург",
            "jobPlace": "Больница",
            "phone": "+79996665544",
            email: 'valera@yandex.ru'
        },
        "parameters": [
            {
                "title": "Пол",
                "value": "Женский",
                "points": 0
            },
            {
                "title": "Возраст",
                "value": "Не пожилой (0-60)",
                "points": 1
            },
            {
                "title": "Предшествующие операции на сердце и магистральных сосудах",
                "value": "Нет",
                "points": -1
            },
            {
                "title": "Лапаротомии в анамнезе, не связанные с данным заболеванием",
                "value": "Да",
                "points": 3
            },
            {
                "title": "Цереброваскулярные и/или сердечно-сосудистые заболевания",
                "value": "Нарушение ритма",
                "points": 2
            },
            {
                "title": "Прием антикоагулянтов и дезагрегантов",
                "value": "Нет",
                "points": 0
            },
            {
                "title": "Шкала Глазго, баллы",
                "value": "15-14",
                "points": -1
            },
            {
                "title": "Среднее АД, мм рт ст",
                "value": "Более 70",
                "points": -2
            },
            {
                "title": "Пульс",
                "value": "110 и менее",
                "points": 0
            },
            {
                "title": "ХОБЛ",
                "value": "Да",
                "points": 4
            },
            {
                "title": "Сахарный диабет",
                "value": "1 тип",
                "points": 1
            },
            {
                "title": "ИМТ, кг/м2",
                "value": "30 и менее",
                "points": -2
            },
            {
                "title": "Хроническая венозная недостаточность (С2-С6 по СЕАР)",
                "value": "Да",
                "points": 0
            },
            {
                "title": "Длительность ОКН до поступления",
                "value": "Позже 24 часов",
                "points": 2
            },
            {
                "title": "Эритроциты, х1012/л",
                "value": "<2,5",
                "points": 3
            },
            {
                "title": "Гемоглобин, г/л",
                "value": "83-100",
                "points": -2
            },
            {
                "title": "Гематокрит, %",
                "value": "30-45%",
                "points": -2
            },
            {
                "title": "Тромбоциты, х103/л",
                "value": "менее 150",
                "points": 0
            },
            {
                "title": "Лейкоциты, х109/л",
                "value": "3-15",
                "points": 0
            },
            {
                "title": "ЧДД в минуту",
                "value": "12-24",
                "points": -2
            },
            {
                "title": "Общий белок, г/л",
                "value": "менее 65",
                "points": 3
            },
            {
                "title": "Альбумин, г/л",
                "value": "менее 35",
                "points": 3
            },
            {
                "title": "Мочевина, ммоль/л",
                "value": "11-30",
                "points": 4
            },
            {
                "title": "Креатинин, мкмоль/л",
                "value": "110-170",
                "points": 3
            },
            {
                "title": "Суточный диурез, л",
                "value": "0,7 и менее",
                "points": 4
            },
            {
                "title": "Билирубин, мкмоль/л",
                "value": "21-32",
                "points": 0
            }
        ],
        "points": 20,
        "result": "Высокий риск выполнения первичной резекции кишки с опухолью"
    }
];