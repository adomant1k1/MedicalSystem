import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { RUS_PHONE_REGEX } from "../../../../utils";
import { DictionariesService } from "../../../../services";

@Component({
    selector: 'app-edit-doctor-dialog',
    templateUrl: './edit-doctor-dialog.component.html',
    styleUrls: ['./edit-doctor-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DictionariesService]
})
export class EditDoctorDialogComponent implements OnInit {
    public value: any | null;

    public form!: UntypedFormGroup;

    public readonly phoneRegex = RUS_PHONE_REGEX;

    public readonly jobPlaces$ = this.dictionariesService.jobPlaces$;

    public readonly jobTitles$ = this.dictionariesService.jobTitles$;

    public readonly loading$ = this.dictionariesService.loading$;

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: any,
        private dialogRef: MatDialogRef<EditDoctorDialogComponent>,
        private readonly fb: FormBuilder,
        private readonly dictionariesService: DictionariesService,
    ) {
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
                id: new UntypedFormControl({ value: value?.id ?? null, disabled: false }),
                firstName: new UntypedFormControl({ value: value?.firstName ?? null, disabled: false }),
                lastName: new UntypedFormControl({ value: value?.lastName ?? null, disabled: false }),
                middleName: new UntypedFormControl({ value: value?.middleName ?? null, disabled: false }),
                jobPlace: new UntypedFormControl({ value: value?.jobPlace?.id ?? null, disabled: false }),
                jobTitle: new UntypedFormControl({ value: value?.jobTitle?.id ?? null, disabled: false }),
                phone: new UntypedFormControl({ value: value?.phone ?? null, disabled: false }),
            }
        );
    }

    public save(): void {
        const res = this.form?.value;
        res.jobPlace = {
            id: res.jobPlace,
            name: this.dictionariesService.jobPlaceRawData.find(it => it.id === res.jobPlace)?.label ?? ''
        };
        res.jobTitle = {
            id: res.jobTitle,
            name: this.dictionariesService.jobTitleRawData.find(it => it.id === res.jobTitle)?.label ?? ''
        };
        this.dialogRef.close(this.form?.value);
    }

    public close(): void {
        this.dialogRef.close()
    }
}
