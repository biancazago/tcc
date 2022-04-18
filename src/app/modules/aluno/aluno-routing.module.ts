import { RouterModule, Routes } from "@angular/router";
import { ListAlunoComponent } from './components/list-aluno/list-aluno.component';
import { FormAlunoComponent } from "./components/form-aluno/form-aluno.component";
import { NgModule } from "@angular/core";
import { RouteNames } from "src/app/shared/util/route-names";

const routes: Routes = [
  { path: '', component: ListAlunoComponent },
  { path: RouteNames.NOVO, component: FormAlunoComponent },
  { path: ':id', component: FormAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
