import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlunoModel } from '../../model/aluno.model';
import { AlunoService } from '../../service/aluno.service';
import { MessageService } from 'primeng';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { MensagemValidacao } from 'src/app/shared/models/mensagem-validacao';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RouteNames, RouteUtils } from 'src/app/shared/util/route-names';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.sass']
})
export class FormAlunoComponent implements OnInit {
  @Input() public aluno: AlunoModel;
  @Input() public modal: boolean = false;
  public formulario: FormGroup;
  public mensagensValidacao: Map<string, MensagemValidacao[]> = new Map();
  @Output() public aoFinalizar: EventEmitter<AlunoModel> = new EventEmitter();
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.iniciarFormulario();
    this.obterAlunoDaRota();
    this.preencherFormulario();
    this.inicializarValidadoresPersonalizados();
  }

  public salvar(): void {
    if(!this.formulario.valid && !this.validadorSenha(this.formulario.get('senhaConfirmada'))) {
      PrimengUtil.mensagemErro(this.messageService, 'Erro no envio', 'Dados inválidos.');
      return;
    }
    let alunoPronto: AlunoModel = this.formulario.getRawValue();
    delete alunoPronto['senhaConfirmada'];
    if(this.modal) {
      this.aoFinalizar.emit(alunoPronto);
      return;
    }
    this.alunoService.mock.salvar(alunoPronto);
    this.voltar();
  }

  public ehModoEdicao(): boolean {
    return !!this.aluno;
  }

  public voltar(): void {
    if(this.modal) {
      this.aoFinalizar.emit(null);
      return;
    }
    this.router.navigateByUrl(RouteUtils.formarRota([RouteNames.ALUNOS], true));
  }

  private obterAlunoDaRota(): void {
    if(this.modal) {
      return;
    }
    this.activatedRoute.params.subscribe((parametros: Params) => {
      if(!parametros.id) {
        return;
      }
      PrimengUtil.operarBlockUI(this.blockUI, this.alunoService.mock.obter(parseInt(parametros.id))).subscribe((aluno: AlunoModel) => {
        this.aluno = aluno;
        this.preencherFormulario();
      }, () => PrimengUtil.mensagemErro(this.messageService, MensagemUtil.REGISTRO_NAO_ENCONTRADO, ''));
    })
  }

  private preencherFormulario(): void {
    if(this.ehModoEdicao()) {
      this.formulario.patchValue(this.aluno);
    }
  }

  private iniciarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      senhaConfirmada: new FormControl(null, [Validators.required])
    }, { updateOn: "blur" });
  }

  private inicializarValidadoresPersonalizados(): void {
    this.mensagensValidacao.set('email', [new MensagemValidacao(
      'E-Mail inválido', (controle: AbstractControl) => !!Validators.email(controle)
    )]);
    this.mensagensValidacao.set('senhaConfirmada', [new MensagemValidacao(
      'Senhas não conferem', (controle: AbstractControl) => this.validadorSenha(controle)
    )]);
  }

  private validadorSenha(controle: AbstractControl): boolean {
    return this.formulario.get('senha').value !== controle.value;
  }
}
