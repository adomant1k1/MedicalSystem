import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    SimpleChanges
} from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { map, Observable, Subscription } from "rxjs";

import { StaticPipe} from "../../pipes";
import { isDefined } from "../../utils";

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges, OnDestroy {
    @Input()
    public src = '';

    @Input()
    public style = '';

    public useImgTag = false;

    public svgIconHtml?: SafeHtml;

    private readonly staticPipe = new StaticPipe();

    private loadSvgIconSubscription?: Subscription;

    constructor(
        private readonly elementRef: ElementRef,
        private readonly http: HttpClient,
        private readonly sanitizer: DomSanitizer,
        private readonly zone: NgZone,
        private readonly cdr: ChangeDetectorRef
    ) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if ('src' in changes) {
            const src = changes['src'].currentValue;

            if (this.isSrcToSvgIcon(src)) {
                this.useImgTag = false;
                this.renderSvgIcon(src);
            } else {
                this.useImgTag = true;
            }
        }
    }

    public ngOnDestroy(): void {
        this.tryUnsubFromLoadSvgIcon();
    }

    private isSrcToSvgIcon(src: string): boolean {
        return src.endsWith('.svg');
    }

    private renderSvgIcon(src: string): void {
        this.tryUnsubFromLoadSvgIcon();

        this.loadSvgIconSubscription = this.loadSvgIcon(src).subscribe((html) => {
            this.svgIconHtml = html;
            this.cdr.markForCheck();
        });
    }

    private loadSvgIcon(url: string): Observable<SafeHtml> {
        const staticIconUrl = this.staticPipe.transform(url);

        return this.zone.runOutsideAngular(() =>
            this.http
                .get(staticIconUrl, { responseType: 'text' })
                .pipe(map((res) => this.sanitizer.bypassSecurityTrustHtml(res)))
        );
    }

    private tryUnsubFromLoadSvgIcon(): void {
        if (isDefined(this.loadSvgIconSubscription)) {
            this.loadSvgIconSubscription.unsubscribe();
        }
    }
}
