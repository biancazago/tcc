import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Prova } from '../../model/prova.model';
import { Page } from '../../../../shared/page';
import { Professor } from '../../../professor/model/professor.model';

@Component({
  selector: 'app-list-prova',
  templateUrl: './list-prova.component.html',
  styleUrls: ['./list-prova.component.sass']
})
export class ListProvaComponent implements OnInit {

  // public pageResponse: Page<any> = new Page();

  // selectedCars3: any[];


  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'descricao', header: 'Descrição' },
    { field: 'professor', header: 'Professor' },

  ];

  // professor: Professor[]

  public pageResponse: Page<Prova> = new Page();

  selectedCars3: any[];


  // cols = [
  //   { field: 'id', header: 'ID' },
  //   { field: 'nome', header: 'Nome' },
  //   { field: 'email', header: 'Email' },

  // ];

  provas = [
      { id: 1, nome: "sss", descricao: "aaa@hotmail.com", professor: "asasa"},
      { id: 2, nome: "dfsd", descricao: "bbbbbb@hotmail.com", professor: "asasa" }
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
    this.pageResponse.content = this.provas
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
