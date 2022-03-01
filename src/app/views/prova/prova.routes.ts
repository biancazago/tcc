import { Routes } from "@angular/router";
import { FormProvaComponent } from './components/form-prova/form-prova.component';
import { ListProvaComponent } from './components/list-prova/list-prova.component';

const routes: Routes = [
    {
        path: "",
        component: ListProvaComponent,
    },
    {
        path: "form",
        component: FormProvaComponent
    },
];

export const ProvaRoutes = routes;
