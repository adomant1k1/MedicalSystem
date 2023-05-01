import { Route } from '@angular/router';

import {
    CanActivateDictionariesGuard,
    CanActivateDoctorsGuard,
    CanActivatePatientsGuard,
    CanActivateQuestionnaireGuard,
    CanActivateQuestionnairesGuard
} from './guards';

export const appRoutes: Route[] = [
    {
        title: 'Анкеты',
        path: 'questionnaires',
        loadChildren: () => import('./modules/questionnaires/questionnaires.module')
            .then((m) => m.QuestionnairesModule),
        canActivate: [CanActivateQuestionnairesGuard]
    },
    {
        title: 'Пациенты',
        path: 'patients',
        loadChildren: () => import('./modules/patients/patients.module')
            .then((m) => m.PatientsModule),
        canActivate: [CanActivatePatientsGuard]
    },
    {
        title: 'Врачи',
        path: 'doctors',
        loadChildren: () => import('./modules/doctors/doctors.module')
            .then((m) => m.DoctorsModule),
        canActivate: [CanActivateDoctorsGuard]
    },
    {
        title: 'Личные данные',
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module')
            .then((m) => m.ProfileModule),
        /*canActivate: CanActivateProfile*/
    },
    {
        title: 'Анкета',
        path: 'questionnaire',
        loadChildren: () => import('./modules/questionnaire/questionnaire.module')
            .then((m) => m.QuestionnaireModule),
        canActivate: [CanActivateQuestionnaireGuard]
    },
    {
        title: 'Справочники',
        path: 'dictionaries',
        loadChildren: () => import('./modules/dictionaries/dictionaries.module')
            .then((m) => m.DictionariesModule),
        canActivate: [CanActivateDictionariesGuard]
    },
    {
        title: 'Справка',
        path: 'faq',
        loadChildren: () => import('./modules/faq/faq.module')
            .then((m) => m.FaqModule)
    },
    {
        title: 'О разработчиках',
        path: 'about',
        loadChildren: () => import('./modules/about/about.module')
            .then((m) => m.AboutModule)
    }
];
