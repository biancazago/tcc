import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from 'primeng';
import { EsqueceuSenhaModel } from '../../model/esqueceu-senha.model';
import { LoginService } from '../../service/login.service';
import { PrimengUtil } from '../../../../shared/util/primeng.util';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;
  public mostrarDialogMudancaSenha: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.inicializarForm();
  }

  public logar(): void {
    this.loginService.logar(this.formulario.getRawValue()).subscribe();
  }

  public esqueceuSenha(): void {
    if(!this.formulario.get('email').valid) {
      PrimengUtil.mensagemAviso(this.messageService, MensagemUtil.INFORMAR_EMAIL, MensagemUtil.MUDANCA_SENHA);
      return;
    }
    let esqueceuSenhaModel: EsqueceuSenhaModel = new EsqueceuSenhaModel(this.formulario.get('email').value);
    this.loginService.pedirMudancaSenha(esqueceuSenhaModel).subscribe(() => {
      this.mostrarDialogMudancaSenha = true;
    });
  }

  public esconderModalMudancaSenha(): void {
    this.mostrarDialogMudancaSenha = false;
  }

  private inicializarForm(): void {
    this.formulario = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, [Validators.required])
    });
  }
}
