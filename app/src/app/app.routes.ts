import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        title: 'Анкеты',
        path: 'questionnaires',
        loadChildren: () => import('./modules/questionnaires/questionnaires.module')
            .then((m) => m.QuestionnairesModule),
        /*canActivate: CanActivateQuestionnaires*/
    },
    {
        title: 'Пациенты',
        path: 'patients',
        loadChildren: () => import('./modules/patients/patients.module')
            .then((m) => m.PatientsModule),
        /*canActivate: CanActivatePatients*/
    },
    {
        title: 'Врачи',
        path: 'doctors',
        loadChildren: () => import('./modules/doctors/doctors.module')
            .then((m) => m.DoctorsModule),
        /*canActivate: CanActivateDoctors*/
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
        /*canActivate: CanActivateProfile*/
    },
    {
        title: 'Справочники',
        path: 'dictionaries',
        loadChildren: () => import('./modules/dictionaries/dictionaries.module')
            .then((m) => m.DictionariesModule),
        /*canActivate: CanActivateProfile*/
    },
    {
        title: 'Личные данные',
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module')
            .then((m) => m.ProfileModule),
        /*canActivate: CanActivateProfile*/
    },
    {
        title: 'Справка',
        path: 'faq',
        loadChildren: () => import('./modules/faq/faq.module')
            .then((m) => m.FaqModule),
        /*canActivate: CanActivateProfile*/
    },
    {
        title: 'О системе',
        path: 'about',
        loadChildren: () => import('./modules/about/about.module')
            .then((m) => m.AboutModule),
        /*canActivate: CanActivateProfile*/
    }
];
