import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Prova } from '../../model/prova.model';
import { Page } from '../../../../models/page';
import { ProfessorModel } from '../../../professor/model/professor.model';

@Component({
  selector: 'app-list-prova',
  templateUrl: './list-prova.component.html',
  styleUrls: ['./list-prova.component.sass']
})
export class ListProvaComponent implements OnInit {

  // public pageResponse: Page<any> = new Page();

  // selectedCars3: any[];


  cols = [
    { field: 'id', header: 'ID', filter:false },
    { field: 'nome', header: 'Nome', filter:false },
    { field: 'descricao', header: 'Descrição', filter:true },
    { field: 'professor', header: 'Professor', filter:false },
    { field: 'area', header: 'area', filter:true },

  ];

  // professor: Professor[]

  public pageResponse: Page<Prova> = new Page();

  selectedCars3: any[];



  areasBusca = [
    {label: "opção 1", value: "1"},
    {label: "opção 2", value: "2"},
    {label: "opção 3", value: "3"}
  ];
  // cols = [
  //   { field: 'id', header: 'ID' },
  //   { field: 'nome', header: 'Nome' },
  //   { field: 'email', header: 'Email' },

  // ];

  provas = [
      { id: 1, nome: "sss", descricao: "aaa@hotmail.com", professor: "asasa", area:"Aisre"},
      { id: 2, nome: "dfsd", descricao: "bbbbbb@hotmail.com", professor: "asasa", area:"ss" }
    ]

  constructor() { }

  ngOnInit(): void {
    this.preencherTabela();
    // console.log(this.professor)
  }

  preencherTabela(valor = null, campo = null, tipo= null) {
    // this.professor = [
    //   { id: 1, nome: "sss", email: "aaa@hotmail.com" },
    //   { id: 2, nome: "dfsd", email: "bbbbbb@hotmail.com" }

    // ]
    console.log("aAAAA", valor, campo, tipo)
    // this.pageResponse.content = this.provas
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
