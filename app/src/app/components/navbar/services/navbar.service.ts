import { Injectable } from "@angular/core";

import { NavbarSection } from "../types";
import { navbarSections, roleViewsRecord } from "../config";
import { RoleType } from "../../../types";

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    public navbarSections: NavbarSection[] = navbarSections;

    public getNavSections(role: RoleType): NavbarSection[] {
        const accessViews = roleViewsRecord[role];

        if (accessViews?.length) {
            this.navbarSections.forEach((section) => {
                section.items.forEach((item) => {
                    item.visible = item.viewName
                        ? accessViews.includes(item.viewName)
                        : item.visible;
                });
            });
        }

        return this.navbarSections;
    }
}