import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Aluno } from '../../model/aluno.model';
import { Page } from '../../../../shared/page';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.sass']
})
export class ListAlunoComponent implements OnInit {

  aluno: Aluno[]

  public pageResponse: Page<Aluno> = new Page();

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'email', header: 'email' },

  ];

  alunos = [
      { id: 1, nome: "Gustavo Souza", email: "gusta@hotmail.com"},
      { id: 2, nome: "Ana Silva", email: "ana@gmailcom" }
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
    this.pageResponse.content = this.alunos
    this.pageResponse.totalElements = 2
    this.pageResponse.totalPages = 1

  }


  excluir(id) {
    
  }

  visualizar(id) {

  }
  
  
}
