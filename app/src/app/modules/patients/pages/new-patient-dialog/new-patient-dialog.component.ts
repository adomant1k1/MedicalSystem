import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { GENDERS } from "../../../../config";
import { RUS_PHONE_REGEX } from "../../../../utils";

@Component({
    selector: 'app-new-patient-dialog',
    templateUrl: './new-patient-dialog.component.html',
    styleUrls: ['./new-patient-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPatientDialogComponent implements OnInit {
    public action!: 'add' | 'edit';

    public value: any | null;

    public form!: UntypedFormGroup;

    public readonly genders: { label: string, value: string }[] = GENDERS;

    public readonly phoneRegex = RUS_PHONE_REGEX;

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: any,
        private dialogRef: MatDialogRef<NewPatientDialogComponent>,
        private readonly fb: FormBuilder
    ) {
        this.action = this.data['action'] ?? 'add';
        this.value = this.data['value'] ?? null;
    }

    public ngOnInit(): void {
        this.initForm();
    }

    public initForm(): void {
        const value = this.value;

        this.form = this.fb.group(
            {
                firstname: new UntypedFormControl({ value: value?.firstname ?? null, disabled: false }),
                lastname: new UntypedFormControl({ value: value?.lastname ?? null, disabled: false }),
                middlename: new UntypedFormControl({ value: value?.middlename ?? null, disabled: false }),
                birthdate: new UntypedFormControl({ value: value?.birthdate ?? null, disabled: false }),
                oms: new UntypedFormControl({ value: value?.oms ?? null, disabled: false }),
                gender: new UntypedFormControl({ value: value?.gender ?? null, disabled: false }),
                phone: new UntypedFormControl({ value: value?.phone ?? null, disabled: false }),
            }
        );
    }

    public save(): void {
        console.log(this.form?.value);
    }

    public close(): void {
        this.dialogRef.close()
    }
}