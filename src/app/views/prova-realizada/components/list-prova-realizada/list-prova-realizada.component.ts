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
    { field: 'id', header: 'ID' },
    { field: 'idProva', header: 'ID da Prova' },
    { field: 'nome', header: 'Nome' },
    { field: 'aluno', header: 'Aluno' },
    { field: 'professor', header: 'Professor' },

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
      { id: 1, idProva: 5, nome: "sss", aluno: "joão jose", professor: "Tião"},
      { id: 2, idProva: 5, nome: "dfsd", aluno: "maria da silva", professor: "Tião" }
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

  visualizarProvaRealizada(id) {

  }

  
}
