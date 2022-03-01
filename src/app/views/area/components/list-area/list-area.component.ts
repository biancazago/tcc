import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Area } from '../../model/area.model';
import { Page } from '../../../../shared/page';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.sass']
})
export class ListAreaComponent implements OnInit {

  area = []
  public pageResponse: Page<Area> = new Page();


  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },

  ];

  areas = [
      { id: 1, nome: "sss" },
      { id: 2, nome: "dfsd" }
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
    this.pageResponse.content = this.areas
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
