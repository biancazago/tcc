import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './imports/primeng-imports';
import { ANGULAR_IMPORTS } from './imports/angular-imports';
import { MessageService } from 'primeng';
import { AutenticacaoService } from './services/autenticacao.service';
import { ErrosFormularioComponent } from './components/erros-formulario/erros-formulario.component';
import { DatePipe } from '@angular/common';

const MODULE_DECLARATIONS: any[] = [
  ErrosFormularioComponent
];

@NgModule({
  declarations: [MODULE_DECLARATIONS],
  imports: [
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS
  ],
  exports: [
    PRIMENG_IMPORTS,
    ANGULAR_IMPORTS,
    MODULE_DECLARATIONS
  ],
  providers: [
    MessageService,
    AutenticacaoService,
    DatePipe
  ]
})
export class SharedModule { }
