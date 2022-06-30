import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProvaRealizada } from '../../model/prova-realizada.model';
import { Page } from '../../../../shared/page';
import { Prova } from '../../../prova/model/prova.model';

@Component({
  selector: 'app-list-prova-realizada',
  templateUrl: './list-prova-realizada.component.html',
  styleUrls: ['./list-prova-realizada.component.sass']
})
export class ListProvaRealizadaComponent implements OnInit {

  
  // public pageResponse: Page<any> = new Page();

  // selectedCars3: any[];


  cols = [
    { field: 'id', header: 'ID', filter: false },
    { field: 'idProva', header: 'ID da Prova', filter: false },
    { field: 'nome', header: 'Nome', filter: false },
    { field: 'aluno', header: 'Aluno', filter: false },
    { field: 'professor', header: 'Professor', filter: true },
    { field: 'data', header: 'Data', filter: true },
    { field: 'pontuacao', header: 'Pontuação', filter: false },

  ];

  // professor: Professor[]

  public pageResponse: Page<ProvaRealizada> = new Page();

  selectedCars3: any[];


  // cols = [
  //   { field: 'id', header: 'ID' },
  //   { field: 'nome', header: 'Nome' },
  //   { field: 'email', header: 'Email' },

  // ];

  provas = [
      { id: 1, idProva: 5, nome: "Prova 1", aluno: "Gustavo Souza", professor: "Maria de Lourdes", data: Date(), pontuacao: "80%"},
      { id: 2, idProva: 5, nome: "Prova 1", aluno: "Ana Silva", professor: "Maria de Lourdes", data: Date(), pontuacao: "80%" }
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
    console.log("AAAAA", valor, campo, tipo)
    this.pageResponse.content = this.provas
    this.pageResponse.totalElements = 2
    this.pageResponse.totalPages = 1

  }

  visualizarProvaRealizada(id) {

  }

  
}
