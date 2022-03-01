import { Routes } from "@angular/router";
import { FormProfessorComponent } from './components/form-professor/form-professor.component';
import { ListProfessorComponent } from './components/list-professor/list-professor.component';

const routes: Routes = [
    {
        path: "",
        component: ListProfessorComponent,
    },
    {
        path: "form",
        component: FormProfessorComponent
    },
];

export const ProfessorRoutes = routes;
