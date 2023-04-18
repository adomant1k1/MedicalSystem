import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { DictionariesService } from "../../../../services";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddDictionaryItemComponent} from "../add-dictionary-item/add-dictionary-item.component";

@Component({
    selector: 'app-dictionaries',
    templateUrl: './dictionaries.component.html',
    styleUrls: ['./dictionaries.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DictionariesService]
})
export class DictionariesComponent implements OnInit {
    public readonly jobPlaces$ = this.service.jobPlaces$;

    public readonly jobTitles$ = this.service.jobTitles$;

    public readonly loading$ = this.service.loading$;

    public tabIndex = 0;

    constructor(
        private readonly dialog: MatDialog,
        public readonly service: DictionariesService
    ) {}

    public ngOnInit(): void {
        this.service.loadData();
    }

    public delete(item: any): void {

    }

    public addNew(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            entity: this.tabIndex === 0 ? 'jobTitle' : 'jobPlace'
        };
        const modalRef = this.dialog.open(AddDictionaryItemComponent, dialogConfig);
    }
}