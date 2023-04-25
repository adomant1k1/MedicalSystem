import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { filter, Subject, takeUntil } from "rxjs";

import { QuestionnaireService } from "../../services";
import { QuestionnaireParamsWithEstimateBoundary } from "../../types";
import { NotificationService } from "../../components/notification/services";

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [QuestionnaireService]
})
export class QuestionnaireComponent implements OnInit, OnDestroy {
    public form!: UntypedFormGroup;

    public readonly questionnaire$ = this.service.questionnaire$;

    public readonly loading$ = this.service.loading$;

    private _questionnaire = null;

    private readonly destroy$ = new Subject<void>();

    public get parameters(): UntypedFormArray {
        return (this.form?.get('parameters') ?? {}) as UntypedFormArray;
    }

    constructor(
        public readonly notification: NotificationService,
        private readonly fb: FormBuilder,
        public readonly service: QuestionnaireService
    ) {}

    public ngOnInit(): void {
        this.service.loadQuestionnaire();
        this.questionnaire$
            .pipe(
                filter(it => it),
                takeUntil(this.destroy$)
            )
            .subscribe((questionnaire) => {
                this._questionnaire = questionnaire;
                this.buildForm(questionnaire);
            })
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public buildForm(data: QuestionnaireParamsWithEstimateBoundary): void {
        const form = this.fb.group({
            estimateBoundary: new UntypedFormControl({ value: data.estimateBoundary ?? 0, disabled: false }),
            parameters: this.fb.array([])
        });
        const parameters = form.get('parameters') as UntypedFormArray;
        (data.parameters ?? []).forEach((parameter) => {
            const res = this.fb.group({
                name: new UntypedFormControl({ value: parameter.name, disabled: false }),
                options: this.fb.array([]),
            })
            const options = res.get('options') as UntypedFormArray;
            (parameter.options ?? []).forEach((option) => {
                const opt = this.fb.group({
                    name: new UntypedFormControl({ value: option.name, disabled: false }),
                    value: new UntypedFormControl({ value: option.value, disabled: false })
                });
                options.push(opt);
            })
           parameters.push(res);
        });

        this.form = form;
    }

    public addNewParameter(): void {
        this.parameters.push(this.fb.group({
            name: new UntypedFormControl({ value: null, disabled: false }),
            options: this.fb.array([]),
        }));
    }

    public addNewOption(parameterForm: UntypedFormGroup): void {
        (parameterForm.get('options') as UntypedFormArray).push(this.fb.group({
            name: new UntypedFormControl({ value: null, disabled: false }),
            value: new UntypedFormControl({ value: null, disabled: false })
        }));
    }

    public saveQuestionnaire(): void {
        console.log(this.form.value);
        this.notification.showSuccessMessage('kek');
    }

    public reset(): void {
        this.buildForm(this._questionnaire as any);
        this.notification.showErrorMessage('ne kek');
    }

    public deleteVariant(form: UntypedFormGroup, index: number): void {
       (form.controls['options'] as UntypedFormArray).removeAt(index);
    }

    public deleteParameter(index: number): void {
        (this.form.get('parameters') as UntypedFormArray).removeAt(index);
    }
}