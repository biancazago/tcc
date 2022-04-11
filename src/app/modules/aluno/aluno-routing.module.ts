import { RouterModule, Routes } from "@angular/router";
import { ListAlunoComponent } from './components/list-aluno/list-aluno.component';
import { FormAlunoComponent } from "./components/form-aluno/form-aluno.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", component: ListAlunoComponent },
  { path: "form", component: FormAlunoComponent },
];

export const AlunoRoutes = routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
