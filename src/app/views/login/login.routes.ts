import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { Login } from "./model/login.model";
import { EsqueceuSenhaComponent } from "./components/esqueceu-senha/esqueceu-senha.component";
import { NovaSenhaComponent } from "./components/nova-senha/nova-senha.component";

const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "nova-senha",
        component: NovaSenhaComponent,
    },
    {
        path: "esqueceu-senha",
        component: EsqueceuSenhaComponent,
    },
];

export const LoginRoutes = routes;
