import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { DictionariesService } from "../../../../services";
import {RUS_PHONE_REGEX} from "../../../../utils/regex";

@Component({
    selector: 'app-new-doctor-dialog',
    templateUrl: './new-doctor-dialog.component.html',
    styleUrls: ['./new-doctor-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DictionariesService]
})
export class NewDoctorDialogComponent implements OnInit {
    public action!: 'add' | 'edit';

    public value: any | null;

    public form!: UntypedFormGroup;

    public readonly jobPlaces$ = this.dictionariesService.jobPlaces$;

    public readonly jobTitles$ = this.dictionariesService.jobTitles$;

    public readonly loading$ = this.dictionariesService.loading$;

    public readonly phoneRegex = RUS_PHONE_REGEX;

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: any,
        private dialogRef: MatDialogRef<NewDoctorDialogComponent>,
        private readonly fb: FormBuilder,
        private readonly dictionariesService: DictionariesService,
    ) {
        this.action = this.data['action'] ?? 'add';
        this.value = this.data['value'] ?? null;
    }

    public ngOnInit(): void {
        this.initForm();
        this.dictionariesService.loadData();
    }

    public initForm(): void {
        const value = this.value;

        this.form = this.fb.group(
            {
                firstname: new UntypedFormControl({ value: value?.firstname ?? null, disabled: false }),
                lastname: new UntypedFormControl({ value: value?.lastname ?? null, disabled: false }),
                middlename: new UntypedFormControl({ value: value?.middlename ?? null, disabled: false }),
                jobPlace: new UntypedFormControl({ value: value?.jobPlace ?? null, disabled: false }),
                jobTitle: new UntypedFormControl({ value: value?.jobTitle ?? null, disabled: false }),
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