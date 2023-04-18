import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatDialogRef} from "@angular/material/dialog";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnInit {
    @Input() public oldPassword!: string;

    public form!: UntypedFormGroup;

    constructor(private dialogRef: MatDialogRef<ChangePasswordComponent>) {}

    public ngOnInit(): void {
        this.form = new UntypedFormGroup({
            oldPassword: new UntypedFormControl({ value: this.oldPassword ?? null, disabled: false}),
            newPassword: new UntypedFormControl({ value: null, disabled: false})
        })
    }

    public close(): void {
        this.dialogRef.close();
    }

    public save(): void {

    }
}