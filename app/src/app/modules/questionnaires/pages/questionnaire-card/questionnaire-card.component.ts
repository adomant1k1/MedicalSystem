import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { QuestionnaireCardService } from "./services";
import {PDFLoader} from "../../../../utils";

@Component({
    selector: 'app-questionnaire-card',
    templateUrl: './questionnaire-card.component.html',
    styleUrls: ['./questionnaire-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [QuestionnaireCardService]
})
export class QuestionnaireCardComponent {
    public readonly loading$ = this.service.loading$;

    public readonly questionnaire$ = this.service.questionnaire$;

    @ViewChild('exportData') exportData!: ElementRef;

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        public readonly service: QuestionnaireCardService
    ) {}

    public ngOnInit(): void {
        this.route.params.subscribe(it => {
            this.service.loadQuestionnaire(it['id']);
        })
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