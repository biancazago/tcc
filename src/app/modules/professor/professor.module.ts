import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormProfessorComponent } from './components/form-professor/form-professor.component';
import { ProfessorService } from './service/professor.service';
import { ListProfessorComponent } from './components/list-professor/list-professor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessorRoutingModule } from './professor-routing.module';

@NgModule({
  declarations: [
    FormProfessorComponent,
    ListProfessorComponent
  ],
  imports: [
    SharedModule,
    ProfessorRoutingModule
  ],
  providers: [
    ProfessorService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProfessorModule { }
