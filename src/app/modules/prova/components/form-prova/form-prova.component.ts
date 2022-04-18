import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Prova } from '../../model/prova.model';
import { PerguntaModel } from '../../../pergunta/model/pergunta.model';
import { SelectItem } from 'primeng';
import { Page } from '../../../../models/page';
import { Area } from '../../../area/model/area.model';

@Component({
  selector: 'app-form-prova',
  templateUrl: './form-prova.component.html',
  styleUrls: ['./form-prova.component.sass']
})
export class FormProvaComponent implements OnInit {

  formulario: FormGroup

  prova = new Prova()


  // areas: Object[];


  areas = [
    {label: "opção 1", value: "opcao1"},
    {label: "opção 2", value: "opcao2"},
    {label: "opção 3", value: "opcao3"}
];

areasBusca = [
  {label: "opção 1", value: "1"},
  {label: "opção 2", value: "2"},
  {label: "opção 3", value: "3"}
];
  areasSeleciodas: Object[];

  selectedCars3: any

  perguntas: any[] = [
    { descricao: 'vin', id: 1, professor: "João", area: 'tec'},
  ];

  public pageResponse: Page<PerguntaModel> = new Page();


  cols = [
    { field: 'id', header: 'ID', filter:false },
    { field: 'descricao', header: 'Descrição',  filter:true },
    { field: 'professor', header: 'Professor',  filter:true },
    { field: 'area', header: 'Área',  filter:true },

  ];

  perguntasSelecionadas: any[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.preencherTabela();
    this.iniciarForm();
  }


  preencherTabela(valor = null, campo = null, tipo= null) {
    // this.professor = [
    //   { id: 1, nome: "sss", email: "aaa@hotmail.com" },
    //   { id: 2, nome: "dfsd", email: "bbbbbb@hotmail.com" }

    // ]
    console.log("aAAAA", valor, campo, tipo, this.areas)
    this.pageResponse.content = this.perguntas
    this.pageResponse.totalElements = 2
    this.pageResponse.totalPages = 1

  }

  iniciarForm() {

    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      area:[null, [Validators.required]]
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
