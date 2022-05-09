import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from "./components/login/login.component";
import { LoginService } from './service/login.service';
import { NovaSenhaComponent } from './components/nova-senha/nova-senha.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    NovaSenhaComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  providers: [LoginService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LoginModule { }
