import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteNames } from "src/app/shared/util/route-names";
import { FormAreaComponent } from './components/form-area/form-area.component';
import { ListAreaComponent } from './components/list-area/list-area.component';

const routes: Routes = [
  { path: "", component: ListAreaComponent },
  { path: RouteNames.NOVO, component: FormAreaComponent },
  { path: ':id', component: FormAreaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule {}
