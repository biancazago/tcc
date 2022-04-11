import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormAlunoComponent } from "./components/form-aluno/form-aluno.component";
import { AlunoService } from './service/aluno.service';
import { ListAlunoComponent } from './components/list-aluno/list-aluno.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlunoRoutingModule } from './aluno-routing.module';

@NgModule({
  declarations: [
    FormAlunoComponent,
    ListAlunoComponent
  ],
  imports: [
    SharedModule,
    AlunoRoutingModule
  ],
  providers: [
    AlunoService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AlunoModule { }
