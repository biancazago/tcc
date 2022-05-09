import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RealizarProvaService } from './service/realizar-prova.service';
import { ListRealizarProvaComponent } from './components/list-realizar-prova/list-realizar-prova.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RealizarProvaRoutingModule } from './realizar-prova-routing.module';
import { FormRealizarProvaComponent } from './components/form-realizar-prova/form-realizar-prova.component';

@NgModule({
  declarations: [
    ListRealizarProvaComponent,
    FormRealizarProvaComponent
  ],
  imports: [
    SharedModule,
    RealizarProvaRoutingModule
  ],
  providers: [
    RealizarProvaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RealizarProvaModule { }
