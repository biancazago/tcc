import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pergunta } from '../../model/pergunta.model';
import { Page } from '../../../../shared/page';

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
      { id: 1, nome: "Pergunta 1", descricao: "O que é orientação de objetos?", professor: "Maria de Loudes"},
      { id: 2, nome: "Pergunta 2", descricao: "O que é banco relacional?", professor: "Maria de Loudes" }
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
    this.pageResponse.content = this.perguntas
    this.pageResponse.totalElements = 2
    this.pageResponse.totalPages = 1

  }


  editar(id) {

  }

  excluir(id) {
    
  }

  visualizar(id) {

  }
  
}
