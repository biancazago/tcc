import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pergunta } from '../../model/pergunta.model';
import { Page } from '../../../../models/page';

@Component({
  selector: 'app-list-pergunta',
  templateUrl: './list-pergunta.component.html',
  styleUrls: ['./list-pergunta.component.sass']
})
export class ListPerguntaComponent implements OnInit {


  public pageResponse: Page<Pergunta> = new Page();

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'descricao', header: 'Descrição' },
    { field: 'professor', header: 'Professor' },

  ];

  perguntas = [
      { id: 1, nome: "sss", descricao: "xxxxxxxxx xsssx", professor: "asasa"},
      { id: 2, nome: "dfsd", descricao: "sdadasdsd rerrtrt", professor: "asasa" }
    ]

  constructor() { }

  ngOnInit(): void {
    this.preencherTabela();
    // console.log(this.professor)
  }

  preencherTabela() {
    // this.professor = [
    //   { id: 1, nome: "sss", email: "aaa@hotmail.com" },
    //   { id: 2, nome: "dfsd", email: "bbbbbb@hotmail.com" }

    // ]
    // this.pageResponse.content = this.perguntas
    // this.pageResponse.totalElements = 2
    // this.pageResponse.totalPages = 1

  }


  editar(id) {

  }

  excluir(id) {

  }

  visualizar(id) {

  }

}
