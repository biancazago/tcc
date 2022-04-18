import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from "./components/login/login.component";
import { AlunoService } from './service/login.service';
import { EsqueceuSenhaComponent } from './components/esqueceu-senha/esqueceu-senha.component';
import { NovaSenhaComponent } from './components/nova-senha/nova-senha.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    EsqueceuSenhaComponent,
    NovaSenhaComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  providers: [AlunoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LoginModule { }
