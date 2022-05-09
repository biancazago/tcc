import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from 'primeng';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.sass']
})
export class NovaSenhaComponent implements OnInit {
  public formulario: FormGroup;
  public mostrarModalSucesso: boolean = false;
  public confirmarSenha: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.inicializarFormulario();
  }

  public mudarSenha(): void {
    if(!this.formulario.valid) {
      PrimengUtil.mensagemErro(this.messageService, MensagemUtil.ERRO_PROCESSAR, MensagemUtil.VERIFICAR_DADOS);
      return;
    }
    this.loginService.mudarSenha(this.formulario.getRawValue()).subscribe(() => {
      this.mostrarModalSucesso = true;
    });
  }

  public senhasBatem(): boolean {
    return this.confirmarSenha === this.formulario?.get('senhaNova').value;
  }

  private inicializarFormulario(): void {
    this.formulario = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      senhaNova: new FormControl('', [Validators.required]),
      token: new FormControl('ewfsokfnseofjewnojefno', [Validators.required])
    });
  }

  // formulario: FormGroup

  // novaSenha = new NovaSenhaModel()

  // constructor(
  //   private formBuilder: FormBuilder
  // ) { }

  // ngOnInit(): void {
  //   this.iniciarForm();
  // }

  // iniciarForm() {
  //   this.formulario = this.formBuilder.group({
  //     senhaAtual: [null, [Validators.required]],
  //     senha: [null, [Validators.required]],
  //     senhaConfirmada: [null, [Validators.required]],

  //       }, { updateOn: "blur" });
  // }

  // voltar() {

  // }

  // salvar(formulario) {

  // }



}
