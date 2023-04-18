import { animate, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import { filter, map, Subject, takeUntil } from "rxjs";
import { isNil } from "lodash";

import { NavbarSection } from "./types";
import { ActiveUserService, LocalStorageService } from "../../services";
import { NavbarService } from "./services";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate('0.6s ease-in', style({ opacity: '1' }))
            ])
        ])
    ]
})
export class NavbarComponent implements OnInit, OnDestroy {
    public navSections: NavbarSection[] = [];

    public activeNavIndex?: string;

    public isOpened = false;

    private readonly navBarKeyName = 'nav_bar';

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly activeUserService: ActiveUserService,
        private readonly navService: NavbarService,
        private readonly router: Router,
        private readonly changeReference: ChangeDetectorRef,
        private readonly localStorageService: LocalStorageService
    ) {
        this.isOpened = localStorageService.isExistKey(this.navBarKeyName);
    }

    public ngOnInit(): void {
        this.activeUserService.profile$
            .pipe(
                map((profile) => profile?.role),
                filter(it => !isNil(it)),
                takeUntil(this.destroy$)
            )
            .subscribe((role) => {
                this.navSections = this.navService.getNavSections(role);
                this.changeReference.markForCheck();
                this.initListeningToRoutes();
            });
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public clickItem(id: string): void {
        this.activeNavIndex = id;
    }

    public statusChange(): void {
        this.isOpened = !this.isOpened;

        if (this.isOpened) {
            this.localStorageService.setItem(this.navBarKeyName, 'yes');
        } else {
            this.localStorageService.removeItem(this.navBarKeyName);
        }
    }

    private initListeningToRoutes(): void {
        this.router.events
            .pipe(filter((routerEvent) => routerEvent instanceof NavigationEnd))
            .subscribe((routerEvent) => {
                if (!(routerEvent instanceof NavigationEnd)) {
                    return;
                }

                const navItem = this.navSections
                    .flatMap(({ items }) => items)
                    .find(({ route }) =>
                        routerEvent.urlAfterRedirects.includes(String(route))
                    );
                this.activeNavIndex = navItem?.id;

                this.changeReference.markForCheck();
            });
    }
}