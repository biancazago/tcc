import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
import { OpcaoModel } from 'src/app/modules/pergunta/model/opcao.model';
import { PerguntaModel } from 'src/app/modules/pergunta/model/pergunta.model';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { RouteNames, RouteUtils } from 'src/app/shared/util/route-names';
import { RealizarProvaModel } from '../../model/realizar-prova.model';

@Component({
  selector: 'app-form-realizar-prova',
  templateUrl: './form-realizar-prova.component.html',
  styleUrls: ['./form-realizar-prova.component.sass']
})
export class FormRealizarProvaComponent implements OnInit {
  public indicadorQuestaoAtual: number = 0;
  public prova: RealizarProvaModel = new RealizarProvaModel(1, 'Prova de Matemática', 'Questões de Aritmética', 'Fabrícia Cortês', new Date(), 'Matemática', [
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
  ]);

  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  public ngOnInit(): void {}

  public salvar(): void {
    PrimengUtil.mensagemInformacao(this.messageService, 'Finalizando Fluxo', '');
  }

  public voltar(): void {
    this.router.navigateByUrl(RouteUtils.formarRota([RouteNames.REALIZAR_PROVA], true));
  }

  public avancar(): void {
    this.indicadorQuestaoAtual++;
  }

  public regredir(): void {
    this.indicadorQuestaoAtual--;
  }

  public obterQuestaoAtual(): PerguntaModel {
    return this.prova.perguntaLista[this.indicadorQuestaoAtual];
  }
}
