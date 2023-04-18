import { NavbarSection } from "../types";
import {RolesTypes, RoleType} from "../../../types";

export const roleViewsRecord: Record<RoleType, string[]> = {
    [RolesTypes.Admin]: ['patients', 'doctors', 'questionnaire' ,'dictionaries', 'faq', 'about'],
    [RolesTypes.Patient]: ['questionnaires', 'faq', 'about'],
    [RolesTypes.Doctor]: ['patients', 'questionnaires', 'faq', 'about']
}

export const navbarSections: NavbarSection[] = [
    {
        description: 'section',
        visible: true,
        items: [
            {
                id: '1',
                title: 'Пациенты',
                icon: 'patients',
                route: '/patients',
                visible: true,
                viewName: 'patients'
            },
            {
                id: '2',
                title: 'Врачи',
                icon: 'doctors',
                route: '/doctors',
                visible: true,
                viewName: 'doctors'
            },
            {
                id: '3',
                title: 'Анкеты',
                icon: 'questionnaire',
                route: '/questionnaires',
                visible: true,
                viewName: 'questionnaires'
            },
            {
                id: '4',
                title: 'Анкета',
                icon: 'questionnaire',
                route: '/questionnaire',
                visible: true,
                viewName: 'questionnaire'
            },
            {
                id: '5',
                title: 'Справочники',
                icon: 'dictionaries',
                route: '/dictionaries',
                visible: true,
                viewName: 'dictionaries'
            },
            {
                id: '6',
                title: 'Справка',
                icon: 'faq',
                route: '/faq',
                visible: true,
                viewName: 'faq'
            },
            {
                id: '7',
                title: 'О системе',
                icon: 'about',
                route: '/about',
                visible: true,
                viewName: 'about'
            },
        ]
    }
];