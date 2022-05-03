import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoasVindasComponent } from './components/boas-vindas/boas-vindas.component';
import { RouteNames } from './shared/util/route-names';

const routes: Routes = [
  { path: RouteNames.LOGIN, loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: RouteNames.PROVAS, loadChildren: () => import('./modules/prova/prova.module').then(m => m.ProvaModule) },
  { path: RouteNames.PERGUNTAS, loadChildren: () => import('./modules/pergunta/pergunta.module').then(m => m.PerguntaModule) },
  { path: RouteNames.PROFESSORES, loadChildren: () => import('./modules/professor/professor.module').then(m => m.ProfessorModule) },
  { path: RouteNames.AREAS, loadChildren: () => import('./modules/area/area.module').then(m => m.AreaModule) },
  { path: RouteNames.ALUNOS, loadChildren: () => import('./modules/aluno/aluno.module').then(m => m.AlunoModule) },
  // { path: RouteNames.REALIZAR_PROVA, loadChildren: () => import('./modules/realizar-prova/realizar-prova.module').then(m => m.RealizarProvaModule) },
  // { path: RouteNames.PROVA_REALIZADA, loadChildren: () => import('./modules/prova-realizada/prova-realizada.module').then(m => m.ProvaRealizadaModule) },
  { path: '', component: BoasVindasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
