import { Routes } from "@angular/router";
import { FormProvaRealizadaComponent } from './components/form-prova-realizada/form-prova-realizada.component';
import { ListProvaRealizadaComponent } from './components/list-prova-realizada/list-prova-realizada.component';

const routes: Routes = [
    {
        path: "",
        component: ListProvaRealizadaComponent,
    },
    {
        path: "form",
        component: FormProvaRealizadaComponent
    },
];

export const ProvaRealizadaRoutes = routes;
