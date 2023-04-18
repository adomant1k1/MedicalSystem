import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { filter, Subject, takeUntil } from "rxjs";

import { QuestionnaireService } from "../../../../services";

@Component({
    selector: 'app-create-questionnaire-dialog',
    templateUrl: './create-questionnaire-dialog.component.html',
    styleUrls: ['./create-questionnaire-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [QuestionnaireService]
})
export class CreateQuestionnaireDialogComponent implements OnInit {
    public action: 'edit' | 'create';

    public value: any | null;

    public readonly loading$ = this.service.loading$;

    public readonly questionnaire$ = this.service.questionnaire$;

    public form!: UntypedFormGroup;

    private readonly destroy$ = new Subject<void>();

    public get parameters(): UntypedFormArray {
        return this.form.get('parameters') as UntypedFormArray;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: any,
        private dialogRef: MatDialogRef<CreateQuestionnaireDialogComponent>,
        private readonly fb: FormBuilder,
        public readonly service: QuestionnaireService
    ) {
        this.action = this.data['action'] ?? 'create';
        this.value = this.data['value'] ?? null;
    }

    public ngOnInit(): void {
        this.service.loadQuestionnaire();
        this.questionnaire$.pipe(
            filter(it => it),
            takeUntil(this.destroy$)
        ).subscribe((questionnaire) => this.initForm(questionnaire));
    }

    public initForm(value: any): void {
        const form = this.fb.group({
            parameters: this.fb.array([])
        });
        const parameters = form.get('parameters') as UntypedFormArray;
        (value['parameters'] ?? []).forEach((value: any) => parameters.push(this.fb.group({
            name: new UntypedFormControl({ value: value.name, disabled: false }),
            value: new UntypedFormControl({ value: this.action === 'edit'
                    ? this.value.parameters.find((it: any) => it.title === value.name)?.points
                    : null, disabled: false
            }),
            options: new UntypedFormControl({ value: value.options, disabled: false }),
        })))
        this.form = form;
    }

    public save(): void {
        console.log(this.form?.value);
    }

    public close(): void {
        this.dialogRef.close()
    }
}