import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PerguntaService } from "../pergunta/service/pergunta.service";
import { FormProvaComponent } from "./components/form-prova/form-prova.component";
import { ListProvaComponent } from "./components/list-prova/list-prova.component";
import { ProvaRoutingModule } from "./prova-routing.module";
import { ProvaService } from "./service/prova.service";


@NgModule({
  declarations: [
    FormProvaComponent,
    ListProvaComponent
  ],
  imports: [
    SharedModule,
    ProvaRoutingModule
  ],
  providers: [
    ProvaService,
    PerguntaService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProvaModule { }
