import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  
  { 
    path: 'login', 
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)

  },
  { 
    path: 'prova', 
    loadChildren: () => import('./views/prova/prova.module').then(m => m.ProvaModule)

  },

  { 
    path: 'pergunta', 
    loadChildren: () => import('./views/pergunta/pergunta.module').then(m => m.PerguntaModule)

  },
  
  { 
    path: 'professor', 
    loadChildren: () => import('./views/professor/professor.module').then(m => m.ProfessorModule)

  },
  
  { 
    path: 'area', 
    loadChildren: () => import('./views/area/area.module').then(m => m.AreaModule)

  },
  
  { 
    path: 'aluno', 
    loadChildren: () => import('./views/aluno/aluno.module').then(m => m.AlunoModule)

  },
  
  { 
    path: 'realizar-prova', 
    loadChildren: () => import('./views/realizar-prova/realizar-prova.module').then(m => m.RealizarProvaModule)

  },
  
  { 
    path: 'prova-realizada', 
    loadChildren: () => import('./views/prova-realizada/prova-realizada.module').then(m => m.ProvaRealizadaModule)

  },
];

export const AppRoutes = routes;
