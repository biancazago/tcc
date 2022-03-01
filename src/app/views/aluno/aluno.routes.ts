import { Routes } from "@angular/router";
import { ListAlunoComponent } from './components/list-aluno/list-aluno.component';
import { FormAlunoComponent } from "./components/form-aluno/form-aluno.component";

const routes: Routes = [
    {
        path: "",
        component: ListAlunoComponent,
    },
    {
        path: "form",
        component: FormAlunoComponent
    },
];

export const AlunoRoutes = routes;
