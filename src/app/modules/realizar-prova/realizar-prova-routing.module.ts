import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { FormRealizarProvaComponent } from "./components/form-realizar-prova/form-realizar-prova.component";
import { ListRealizarProvaComponent } from './components/list-realizar-prova/list-realizar-prova.component';

const routes: Route[] = [
  { path: '', component: ListRealizarProvaComponent },
  { path: 'form', component: FormRealizarProvaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealizarProvaRoutingModule {}
