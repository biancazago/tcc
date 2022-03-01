import { Routes } from "@angular/router";
import { FormAreaComponent } from './components/form-area/form-area.component';
import { ListAreaComponent } from './components/list-area/list-area.component';

const routes: Routes = [
    {
        path: "",
        component: ListAreaComponent,
    },
    {
        path: "form",
        component: FormAreaComponent
    },
];

export const AreaRoutes = routes;
