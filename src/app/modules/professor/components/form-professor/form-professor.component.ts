import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { MessageService } from "primeng";
import { MensagemValidacao } from "src/app/shared/models/mensagem-validacao";
import { MensagemUtil } from "src/app/shared/util/mensagem.util";
import { PrimengUtil } from "src/app/shared/util/primeng.util";
import { RouteNames, RouteUtils } from "src/app/shared/util/route-names";
import { ProfessorModel } from "../../model/professor.model";
import { ProfessorService } from "../../service/professor.service";


@Component({
  selector: 'app-form-professor',
  templateUrl: './form-professor.component.html',
  styleUrls: ['./form-professor.component.sass']
})
export class FormProfessorComponent implements OnInit {
  @Input() public professor: ProfessorModel;
  @Input() public modal: boolean = false;
  public formulario: FormGroup;
  public mensagensValidacao: Map<string, MensagemValidacao[]> = new Map();
  @Output() public aoFinalizar: EventEmitter<ProfessorModel> = new EventEmitter();
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.iniciarFormulario();
    this.obterProfessorDaRota();
    this.preencherFormulario();
  }

  public salvar(): void {
    if(!this.formulario.valid) {
      PrimengUtil.mensagemErro(this.messageService, 'Erro no envio', 'Dados inválidos.');
      return;
    }
    let professorPronto: ProfessorModel = this.formulario.getRawValue();
    if(this.modal) {
      this.aoFinalizar.emit(professorPronto);
      return;
    }
    this.professorService.mock.salvar(professorPronto);
    this.voltar();
  }

  public ehModoEdicao(): boolean {
    return !!this.professor;
  }

  public voltar(): void {
    if(this.modal) {
      this.aoFinalizar.emit(null);
      return;
    }
    this.router.navigateByUrl(RouteUtils.formarRota([RouteNames.PROFESSORES], true));
  }

  private obterProfessorDaRota(): void {
    if(this.modal) {
      return;
    }
    this.activatedRoute.params.subscribe((parametros: Params) => {
      if(!parametros.id) {
        return;
      }
      PrimengUtil.operarBlockUI(this.blockUI, this.professorService.mock.obter(parseInt(parametros.id))).subscribe((professor: ProfessorModel) => {
        this.professor = professor;
        this.preencherFormulario();
      }, () => PrimengUtil.mensagemErro(this.messageService, MensagemUtil.REGISTRO_NAO_ENCONTRADO, ''));
    })
  }

  private preencherFormulario(): void {
    if(this.ehModoEdicao()) {
      this.formulario.patchValue(this.professor);
    }
  }

  private iniciarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(255)])
    }, { updateOn: "blur" });
  }
}
