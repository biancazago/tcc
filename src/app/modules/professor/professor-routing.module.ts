import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteNames } from "src/app/shared/util/route-names";
import { FormProfessorComponent } from './components/form-professor/form-professor.component';
import { ListProfessorComponent } from './components/list-professor/list-professor.component';

const routes: Routes = [
  { path: '', component: ListProfessorComponent },
  { path: RouteNames.NOVO, component: FormProfessorComponent },
  { path: ':id', component: FormProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
