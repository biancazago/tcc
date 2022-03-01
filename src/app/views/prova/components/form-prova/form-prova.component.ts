import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Prova } from '../../model/prova.model';
import { Pergunta } from '../../../pergunta/model/pergunta.model';
import { SelectItem } from 'primeng';
import { Page } from '../../../../shared/page';

@Component({
  selector: 'app-form-prova',
  templateUrl: './form-prova.component.html',
  styleUrls: ['./form-prova.component.sass']
})
export class FormProvaComponent implements OnInit {

  formulario: FormGroup

  prova = new Prova()


  selectedCars3: any

  perguntas: any[] = [
    { descricao: 'vin', id: 1 },
  ];

  public pageResponse: Page<Pergunta> = new Page();

  
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'descricao', header: 'Descrição' },
    { field: 'professor', header: 'Professor' },

  ];

  perguntasSelecionadas: any[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.preencherTabela();
    this.iniciarForm();
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

  iniciarForm() {
    
    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      nome: [null, [Validators.required]],
  }, { updateOn: "blur" });
    
  }

  voltar() {

  }

  salvar(formulario) {
    
  }


  insereListaSelecionados(id) {

    if (this.perguntasSelecionadas.some(res => res === res)) {
        this.perguntasSelecionadas = this.perguntasSelecionadas.filter(idPergunta => {
            return !(id === idPergunta);
        });
    } else {
        this.perguntasSelecionadas.push(id)
    }
}
  
}
