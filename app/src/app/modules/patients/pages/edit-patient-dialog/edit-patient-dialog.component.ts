import {ChangeDetectionStrategy, Component, Inject, OnInit} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";

import { GENDERS } from "../../../../config";
import { RUS_PHONE_REGEX } from "../../../../utils";

@Component({
    selector: 'app-edit-patient-dialog',
    templateUrl: './edit-patient-dialog.component.html',
    styleUrls: ['./edit-patient-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPatientDialogComponent implements OnInit {
    public value: any | null;

    public form!: UntypedFormGroup;

    public readonly genders: { label: string, value: string }[] = GENDERS;

    public readonly phoneRegex = RUS_PHONE_REGEX;

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: any,
        private dialogRef: MatDialogRef<EditPatientDialogComponent>,
        private readonly fb: FormBuilder
    ) {
        this.value = this.data['value'] ?? null;
    }

    public ngOnInit(): void {
        this.initForm();
    }

    public initForm(): void {
        const value = this.value;

        this.form = this.fb.group(
            {
                id: new UntypedFormControl({ value: value?.id ?? null, disabled: false }),
                firstName: new UntypedFormControl({ value: value?.firstName ?? null, disabled: false }),
                lastName: new UntypedFormControl({ value: value?.lastName ?? null, disabled: false }),
                middleName: new UntypedFormControl({ value: value?.middleName ?? null, disabled: false }),
                birthDate: new UntypedFormControl({ value: value?.birthDate ? new Date(value.birthDate) : null, disabled: false }),
                oms: new UntypedFormControl({ value: value?.oms ?? null, disabled: false }),
                gender: new UntypedFormControl({ value: value?.gender ?? null, disabled: false }),
                phone: new UntypedFormControl({ value: value?.phone ?? null, disabled: false }),
            }
        );
    }

    public save(): void {
      const res = this.form?.value;
      res['birthDate'] = (res.birthDate as Date).toISOString().slice(0, 10);
      this.dialogRef.close(this.form?.value);
    }

    public close(): void {
        this.dialogRef.close()
    }
}