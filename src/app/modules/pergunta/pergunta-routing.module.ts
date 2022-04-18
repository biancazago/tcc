import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteNames } from "src/app/shared/util/route-names";
import { FormPerguntaComponent } from './components/form-pergunta/form-pergunta.component';
import { ListPerguntaComponent } from './components/list-pergunta/list-pergunta.component';

const routes: Routes = [
  { path: '', component: ListPerguntaComponent },
  { path: RouteNames.NOVO, component: FormPerguntaComponent },
  { path: ': id', component: FormPerguntaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerguntaRoutingModule { }
