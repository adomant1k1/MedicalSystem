import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { QuestionnaireCardComponent, QuestionnairesComponent } from "./pages";

const routes: Routes = [
    {
        path: '',
        component: QuestionnairesComponent
    },
    {
        path: ':id',
        component: QuestionnaireCardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionnairesRoutingModule {}