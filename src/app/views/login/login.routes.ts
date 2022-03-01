import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { Login } from "./model/login.model";

const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
];

export const LoginRoutes = routes;
