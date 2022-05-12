import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RealizarProvaModel } from '../../model/realizar-prova.model';
import { Page } from '../../../../models/page';
import { PerguntaModel } from 'src/app/modules/pergunta/model/pergunta.model';
import { OpcaoModel } from 'src/app/modules/pergunta/model/opcao.model';

@Component({
  selector: 'app-list-realizar-prova',
  templateUrl: './list-realizar-prova.component.html',
  styleUrls: ['./list-realizar-prova.component.sass']
})
export class ListRealizarProvaComponent {
  public provas: RealizarProvaModel[] = [
    new RealizarProvaModel(1, 'Prova de Matemática', 'Questões de Aritmética', 'Fabrícia Cortês', new Date(), 'Matemática', [
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
    ])
  ];

}
