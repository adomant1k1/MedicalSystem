import { NavbarItemType } from './navbar-item.type';

export type NavbarSection = {
    description?: string;
    visible?: boolean;
    items: NavbarItemType[];
};
