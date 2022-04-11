import { Routes } from "@angular/router";
import { FormRealizarProvaComponent } from './components/form-realizar-prova/form-realizar-prova.component';
import { ListRealizarProvaComponent } from './components/list-realizar-prova/list-realizar-prova.component';

const routes: Routes = [
    {
        path: "",
        component: ListRealizarProvaComponent,
    },
    {
        path: "form",
        component: FormRealizarProvaComponent
    },
];

export const RealizarProvaRoutes = routes;
