import { Routes } from "@angular/router";
import { FormPerguntaComponent } from './components/form-pergunta/form-pergunta.component';
import { ListPerguntaComponent } from './components/list-pergunta/list-pergunta.component';

const routes: Routes = [
    {
        path: "",
        component: ListPerguntaComponent,
    },
    {
        path: "form",
        component: FormPerguntaComponent
    },
];

export const PerguntaRoutes = routes;
