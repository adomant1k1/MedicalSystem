import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";

import { QuestionnaireCardService } from "./services";
import { PDFLoader } from "../../../../utils";
import { DoctorsService, PatientsService } from "../../../../services";
import { DoctorType, PatientType } from "../../../../types";

@Component({
    selector: 'app-questionnaire-card',
    templateUrl: './questionnaire-card.component.html',
    styleUrls: ['./questionnaire-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [QuestionnaireCardService, DoctorsService, PatientsService]
})
export class QuestionnaireCardComponent implements OnInit, OnDestroy {
    public readonly loading$ = this.service.loading$;

    public readonly questionnaire$ = this.service.questionnaire$;

    private readonly _doctor$ = new BehaviorSubject<DoctorType | null>(null);

    public readonly doctor$ = this._doctor$.asObservable();

    private readonly _patient$ = new BehaviorSubject<PatientType | null>(null);

    public readonly patient$ = this._patient$.asObservable();

    @ViewChild('exportData') exportData!: ElementRef;

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        public readonly service: QuestionnaireCardService,
        private readonly doctorService: DoctorsService,
        private readonly patientsService: PatientsService
    ) {}

    public ngOnInit(): void {
        this.route.params.subscribe(it => {
            this.service.loadQuestionnaire(it['id']);
        });

        this.service.loadPatient$.pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: (id) => {
                if (typeof id === 'number') {
                    this._patient$.next(this.patientsService.getPatientById(id));
                }
            }
        })

        this.service.loadDoctor$.pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: (id) => {
                if (typeof id === 'number') {
                    this._doctor$.next(this.doctorService.getDoctorById(id));
                }
            }
        })
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }


    public print(): void {
        window.print();
    }

    public download(): void {
        let DATA: any = document.getElementById('exportData');
        const loader = new PDFLoader(DATA);
        loader.openPDF();
    }
}