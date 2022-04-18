import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormPerguntaComponent } from './components/form-pergunta/form-pergunta.component';
import { PerguntaService } from './service/pergunta.service';
import { ListPerguntaComponent } from './components/list-pergunta/list-pergunta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerguntaRoutingModule } from './pergunta-routing.module';

@NgModule({
  declarations: [
      FormPerguntaComponent,
      ListPerguntaComponent
  ],
  imports: [
    SharedModule,
    PerguntaRoutingModule
  ],
  providers: [
    PerguntaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PerguntaModule { }
