import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-edit-dictionary-item',
    templateUrl: './edit-dictionary-item.component.html',
    styleUrls: ['./edit-dictionary-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDictionaryItemComponent implements OnInit {
    public value!: any;

    public entity!: 'jobTitle' | 'jobPlace';

    public form!: UntypedFormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: any,
        private dialogRef: MatDialogRef<EditDictionaryItemComponent>,
        private readonly fb: FormBuilder
    ) {
        this.value = this.data['value'] ?? {};
        this.entity = this.data['entity'] ?? 'jobTitle';
    }

    public ngOnInit(): void {
        this.form = this.fb.group({
            id: new UntypedFormControl({ value: this.value?.id, disabled: false }),
            name: new UntypedFormControl({ value: this.value?.label, disabled: false })
        })
    }

    public save(): void {
        console.log(this.form?.value);
    }

    public close(): void {
        this.dialogRef.close()
    }
}