import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListProvaRealizadaComponent } from './components/list-prova-realizada/list-prova-realizada.component';
import { ProvaRealizadaService } from './service/prova-realizada.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProvaRealizadaRoutingModule } from './prova-realizada-routing.module';

@NgModule({
  declarations: [
    ListProvaRealizadaComponent
  ],
  imports: [
    SharedModule,
    ProvaRealizadaRoutingModule
  ],
  providers: [
    ProvaRealizadaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProvaRealizadaModule { }
