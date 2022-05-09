import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ListProvaRealizadaComponent } from './components/list-prova-realizada/list-prova-realizada.component';

const routes: Route[] = [
  { path: "", component: ListProvaRealizadaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvaRealizadaRoutingModule {}
