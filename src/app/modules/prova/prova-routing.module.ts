import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteNames } from "src/app/shared/util/route-names";
import { FormProvaComponent } from './components/form-prova/form-prova.component';
import { ListProvaComponent } from './components/list-prova/list-prova.component';

const routes: Routes = [
  { path: '', component: ListProvaComponent },
  { path: RouteNames.NOVO, component: FormProvaComponent },
  { path: ':id', component: FormProvaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvaRoutingModule { }
