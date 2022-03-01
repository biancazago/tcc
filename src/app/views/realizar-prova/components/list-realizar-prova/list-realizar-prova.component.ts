import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RealizarProva } from '../../model/realizar-prova.model';
import { Page } from '../../../../shared/page';
import { Prova } from '../../../prova/model/prova.model';

@Component({
  selector: 'app-list-realizar-prova',
  templateUrl: './list-realizar-prova.component.html',
  styleUrls: ['./list-realizar-prova.component.sass']
})
export class ListRealizarProvaComponent implements OnInit {

  
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

  iniciarProva(id) {

  }

  
}
