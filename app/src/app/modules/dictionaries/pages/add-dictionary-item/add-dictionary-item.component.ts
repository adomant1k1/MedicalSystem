import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";

@Component({
    selector: 'app-add-dictionary-item',
    templateUrl: './add-dictionary-item.component.html',
    styleUrls: ['./add-dictionary-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDictionaryItemComponent implements OnInit {
    public entity!: 'jobTitle' | 'jobPlace';

    public form!: UntypedFormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: any,
        private dialogRef: MatDialogRef<AddDictionaryItemComponent>,
        private readonly fb: FormBuilder
    ) {
        this.entity = this.data['entity'] ?? 'jobTitle';
    }

    public ngOnInit(): void {
        this.form = this.fb.group({
            name: new UntypedFormControl({ value: null, disabled: false })
        })
    }

    public save(): void {
        this.dialogRef.close(Object.assign({ entity: this.entity }, this.form?.value))
    }

    public close(): void {
        this.dialogRef.close()
    }
}