import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { PerguntaModel } from '../../model/pergunta.model';
import { MessageService, SelectItem } from 'primeng';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MensagemValidacao } from 'src/app/shared/models/mensagem-validacao';
import { PerguntaService } from '../../service/pergunta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouteNames, RouteUtils } from 'src/app/shared/util/route-names';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';
import { OpcaoModel } from '../../model/opcao.model';
import { AreaService } from 'src/app/modules/area/service/area.service';
import { AreaModel } from 'src/app/modules/area/model/area.model';

@Component({
  selector: 'app-form-pergunta',
  templateUrl: './form-pergunta.component.html',
  styleUrls: ['./form-pergunta.component.sass']
})
export class FormPerguntaComponent implements OnInit {
  @Input() public pergunta: PerguntaModel;
  @Input() public modal: boolean = false;
  public formulario: FormGroup;
  public mensagensValidacao: Map<string, MensagemValidacao[]> = new Map();
  public opcoesArea: SelectItem[];
  @Output() public aoFinalizar: EventEmitter<PerguntaModel> = new EventEmitter();
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private formBuilder: FormBuilder,
    private perguntaService: PerguntaService,
    private areaService: AreaService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.iniciarFormulario();
    this.obterPerguntaDaRota();
    this.preencherFormulario();
    this.obterAreas();
  }

  public salvar(): void {
    if(!this.formulario.valid) {
      PrimengUtil.mensagemErro(this.messageService, 'Erro no envio', 'Dados inválidos.');
      return;
    }
    let perguntaPronta: PerguntaModel = this.formulario.getRawValue();
    delete perguntaPronta['senhaConfirmada'];
    if(this.modal) {
      this.aoFinalizar.emit(perguntaPronta);
      return;
    }
    this.perguntaService.mock.salvar(perguntaPronta);
    this.voltar();
  }

  public ehModoEdicao(): boolean {
    return !!this.pergunta;
  }

  public voltar(): void {
    if(this.modal) {
      this.aoFinalizar.emit(null);
      return;
    }
    this.router.navigateByUrl(RouteUtils.formarRota([RouteNames.PERGUNTAS], true));
  }

  public selecionarOpcaoCorreta(opcao: OpcaoModel): void {
    let opcaoCorreta: OpcaoModel = this.obterOpcao(opcao);
    if(!!opcaoCorreta) {
      this.formulario.get('opcaoCorreta').setValue(opcaoCorreta);
    }
  }

  public obterOpcao(opcao: OpcaoModel): OpcaoModel {
    return this.obterOpcoes().find((opcaoProcurada:OpcaoModel) => opcaoProcurada == opcao);
  }

  public obterOpcoes(): OpcaoModel[] {
    return this.formulario.get('opcoes').value;
  }

  public isOpcaoCorreta(opcao: OpcaoModel): boolean {
    return this.formulario.get('opcaoCorreta').value == opcao;
  }

  public removerOpcao(opcao: OpcaoModel): void {
    if(this.isOpcaoCorreta(opcao)) {
      this.formulario.get('opcaoCorreta').setValue(null);
    }
    this.formulario.get('opcoes').setValue(this.obterOpcoes().filter((opcaoParaRemover: OpcaoModel) => opcaoParaRemover != opcao));
  }

  public adicionarOpcao(opcao: OpcaoModel): void {
    let opcoesAtuais: OpcaoModel[] = this.obterOpcoes();
    if(opcoesAtuais) {
      opcoesAtuais.push(opcao);
    }
    this.formulario.get('opcoes').setValue(opcoesAtuais ? opcoesAtuais : [opcao]);
  }

  private obterAreas(): void {
    this.areaService.mock.obterTodos().subscribe((areas: AreaModel[]) => this.opcoesArea = PrimengUtil.converterVetorParaSelectItem(areas, 'nome'));
  }

  private obterPerguntaDaRota(): void {
    if(this.modal) {
      return;
    }
    this.activatedRoute.params.subscribe((parametros: Params) => {
      if(!parametros.id) {
        return;
      }
      PrimengUtil.operarBlockUI(this.blockUI, this.perguntaService.mock.obter(parseInt(parametros.id))).subscribe((pergunta: PerguntaModel) => {
        this.pergunta = pergunta;
        this.preencherFormulario();
      }, () => PrimengUtil.mensagemErro(this.messageService, MensagemUtil.REGISTRO_NAO_ENCONTRADO, ''));
    })
  }

  private preencherFormulario(): void {
    if(this.ehModoEdicao()) {
      this.formulario.patchValue(this.pergunta);
    }
  }

  private iniciarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: new FormControl(null),
      descricao: new FormControl(null, [Validators.required, Validators.maxLength(250)]),
      opcoes: new FormControl(null, [Validators.required]),
      opcaoCorreta: new FormControl(null),
      areas: new FormControl(null, [Validators.required])
    }, { updateOn: "blur" });
  }
}
