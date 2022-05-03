import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormPerguntaComponent } from './components/form-pergunta/form-pergunta.component';
import { PerguntaService } from './service/pergunta.service';
import { ListPerguntaComponent } from './components/list-pergunta/list-pergunta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerguntaRoutingModule } from './pergunta-routing.module';
import { FormOpcaoComponent } from './components/form-opcao/form-opcao.component';
import { AreaService } from '../area/service/area.service';

@NgModule({
  declarations: [
      FormPerguntaComponent,
      ListPerguntaComponent,
      FormOpcaoComponent
  ],
  imports: [
    SharedModule,
    PerguntaRoutingModule
  ],
  providers: [
    PerguntaService,
    AreaService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PerguntaModule { }
