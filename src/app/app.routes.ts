import { Routes } from '@angular/router';
import { PressaoArterialListComponent } from './pages/pressao-arterial-list/pressao-arterial-list.component';
import { PressaoArterialFormComponent } from './pages/pressao-arterial-form/pressao-arterial-form.component';

export const routes: Routes = [
    {
        path:"",
        pathMatch: "full",
        redirectTo: "pressao" //temporário até montar o formulário de inserção.
    },
    {
        path: "pressao",
        component: PressaoArterialListComponent
    },
    {
        path:"add",
        component: PressaoArterialFormComponent
    }
];
