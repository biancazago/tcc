import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { MessageService, SelectItem } from 'primeng';
import { OpcaoModel } from 'src/app/modules/pergunta/model/opcao.model';
import { PerguntaModel } from 'src/app/modules/pergunta/model/pergunta.model';
import { PerguntaService } from 'src/app/modules/pergunta/service/pergunta.service';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { RouteNames, RouteUtils } from 'src/app/shared/util/route-names';

@Component({
  selector: 'app-form-prova',
  templateUrl: './form-prova.component.html',
  styleUrls: ['./form-prova.component.sass']
})
export class FormProvaComponent implements OnInit {
  public formulario: FormGroup
  public areas: SelectItem[] = [
    { label: "Matemática", value: "opcao1" },
    { label: "Geografia", value: "opcao2" },
    { label: "Historia", value: "opcao3" }
  ];
  public professores: SelectItem[] = [
    { label: "Marcela Ferraz", value: "opcao1" },
    { label: "Joaquim Nunes", value: "opcao2" },
    { label: "Fernando Paiva", value: "opcao3" }
  ];
  public perguntas: PerguntaModel[] = [
    new PerguntaModel(1, 'Quantas faces tem um cubo?', [
      new OpcaoModel(1, '1'),
      new OpcaoModel(2, '2'),
      new OpcaoModel(3, '5'),
      new OpcaoModel(4, '6'),
      new OpcaoModel(5, '9'),
    ]),
    new PerguntaModel(1, 'Quantos mL há em um L?', [
      new OpcaoModel(6, '1000'),
      new OpcaoModel(7, '2000'),
      new OpcaoModel(8, '5000'),
      new OpcaoModel(9, '6000'),
      new OpcaoModel(10, '9000'),
    ]),
  ];
  public perguntasSelecionadas: PerguntaModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.formulario = this.formBuilder.group({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null, [Validators.required]),
      professor: new FormControl(null, [Validators.required]),
      data: new FormControl(null, [Validators.required]),
      areas: new FormControl(null, [Validators.required]),
      perguntaLista: new FormControl(null, [Validators.required]),
    }, { updateOn: "blur" });
  }

  public salvar(): void {
    PrimengUtil.mensagemInformacao(this.messageService, 'Finalizando fluxo', '');
  }

  public voltar(): void {
    this.router.navigateByUrl(RouteUtils.formarRota([RouteNames.PROVAS], true));
  }

  public ehModoEdicao(): boolean {
    return false;
  }
}
