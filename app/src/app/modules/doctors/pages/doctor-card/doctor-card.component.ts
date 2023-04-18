import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { DoctorCardService } from "./services";

@Component({
    selector: 'app-doctor-card',
    templateUrl: './doctor-card.component.html',
    styleUrls: ['./doctor-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DoctorCardService]
})
export class DoctorCardComponent implements OnInit {
    public readonly loading$ = this.service.loading$;

    public readonly doctor$ = this.service.doctor$;

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        public readonly service: DoctorCardService
    ) {}

    public ngOnInit(): void {
        this.route.params.subscribe(it => {
            this.service.loadDoctor(it['id']);
        })
    }
}
