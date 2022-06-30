import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Professor } from '../../model/professor.model';
import { Page } from '../../../../shared/page';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.sass']
})
export class ListProfessorComponent implements OnInit {

  professor: Professor[]

  public pageResponse: Page<Professor> = new Page();

  selectedCars3: any[];


  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'email', header: 'Email' },

  ];

  professores = [
      { id: 1, nome: "João", email: "joao@hotmail.com" },
      { id: 2, nome: "Maria de Lourdes", email: "maria@hotmail.com" }
    ]

  constructor() { }

  ngOnInit(): void {
    this.preencherTabela();
    console.log(this.professor)
  }

  preencherTabela() {
    this.professor = [
      { id: 1, nome: "João", email: "joao@hotmail.com" },
      { id: 2, nome: "Maria de Lourdes", email: "maria@hotmail.com" }
    ]
    this.pageResponse.content = this.professor
    this.pageResponse.totalElements = 2
    this.pageResponse.totalPages = 1

  }

  editar(id) {

  }

  excluir(id) {

  }


}
