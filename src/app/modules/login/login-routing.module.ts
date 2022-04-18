import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { EsqueceuSenhaComponent } from "./components/esqueceu-senha/esqueceu-senha.component";
import { NovaSenhaComponent } from "./components/nova-senha/nova-senha.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nova-senha', component: NovaSenhaComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
