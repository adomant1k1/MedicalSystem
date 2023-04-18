import { Injectable, OnDestroy } from "@angular/core";
import { asyncScheduler, BehaviorSubject, debounceTime, filter, Subject, takeUntil, tap, throttleTime } from "rxjs";
import { Message } from 'primeng/api';

import { SeverityMessage } from "../../../types";
import { Replace } from "../../../utils";

@Injectable({
    providedIn: 'root'
})
export class NotificationService implements OnDestroy {
    public currentMessage$: BehaviorSubject<Message[]> = new BehaviorSubject<
        Message[]
        >([]);

    private destroy$: Subject<void> = new Subject<void>();

    private messagesPool$: Subject<Message> = new Subject();

    constructor() {
        this.messagesPool$
            .pipe(
                throttleTime(100, asyncScheduler, { leading: true, trailing: true }),
                tap((item: Message) => {
                    const newMessages = [item];
                    this.currentMessage$.next(newMessages);
                }),
                debounceTime(2500),
                filter((item: Message) => item.severity === 'success'),
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                this.currentMessage$.next([]);
            });
    }

    public showMessage(
        message: Replace<Message, 'severity', { severity?: SeverityMessage }>
    ): void {
        this.messagesPool$.next(message);
    }

    public showSuccessMessage(summary: string, detail?: string): void {
        this.showMessage({
            severity: SeverityMessage.SUCCESS,
            summary,
            detail
        });
    }

    public showInfoMessage(summary: string, detail?: string): void {
        this.showMessage({
            severity: SeverityMessage.INFO,
            summary,
            detail
        });
    }

    public showWarnMessage(summary: string, detail?: string): void {
        this.showMessage({
            severity: SeverityMessage.WARN,
            summary,
            detail
        });
    }

    public showErrorMessage(summary: string, detail?: string): void {
        this.showMessage({
            severity: SeverityMessage.ERROR,
            summary,
            detail
        });
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}