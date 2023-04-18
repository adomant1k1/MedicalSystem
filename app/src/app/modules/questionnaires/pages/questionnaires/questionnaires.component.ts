import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-questionnaires',
    templateUrl: './questionnaires.component.html',
    styleUrls: ['./questionnaires.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnairesComponent {}