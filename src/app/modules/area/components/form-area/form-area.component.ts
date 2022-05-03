import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng';
import { MensagemValidacao } from 'src/app/shared/models/mensagem-validacao';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { RouteNames, RouteUtils } from 'src/app/shared/util/route-names';
import { AreaModel } from '../../model/area.model';
import { AreaService } from '../../service/area.service';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.sass']
})
export class FormAreaComponent implements OnInit {
  @Input() public area: AreaModel;
  @Input() public modal: boolean = false;
  public formulario: FormGroup;
  public mensagensValidacao: Map<string, MensagemValidacao[]> = new Map();
  @Output() public aoFinalizar: EventEmitter<AreaModel> = new EventEmitter();
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private formBuilder: FormBuilder,
    private areaService: AreaService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.iniciarFormulario();
    this.obterAreaDaRota();
    this.preencherFormulario();
  }

  public salvar(): void {
    if(!this.formulario.valid) {
      PrimengUtil.mensagemErro(this.messageService, 'Erro no envio', 'Dados inválidos.');
      return;
    }
    let areaPronta: AreaModel = this.formulario.getRawValue();
    delete areaPronta['senhaConfirmada'];
    if(this.modal) {
      this.aoFinalizar.emit(areaPronta);
      return;
    }
    this.areaService.mock.salvar(areaPronta);
    this.voltar();
  }

  public ehModoEdicao(): boolean {
    return !!this.area;
  }

  public voltar(): void {
    if(this.modal) {
      this.aoFinalizar.emit(null);
      return;
    }
    this.router.navigateByUrl(RouteUtils.formarRota([RouteNames.AREAS], true));
  }

  private obterAreaDaRota(): void {
    if(this.modal) {
      return;
    }
    this.activatedRoute.params.subscribe((parametros: Params) => {
      if(!parametros.id) {
        return;
      }
      PrimengUtil.operarBlockUI(this.blockUI, this.areaService.mock.obter(parseInt(parametros.id))).subscribe((area: AreaModel) => {
        this.area = area;
        this.preencherFormulario();
      }, () => PrimengUtil.mensagemErro(this.messageService, MensagemUtil.REGISTRO_NAO_ENCONTRADO, ''));
    })
  }

  private preencherFormulario(): void {
    if(this.ehModoEdicao()) {
      this.formulario.patchValue(this.area);
    }
  }

  private iniciarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      descricao: new FormControl(null, [Validators.required, Validators.maxLength(250)]),
    }, { updateOn: "blur" });
  }
}
