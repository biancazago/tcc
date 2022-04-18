import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PerguntaModel } from '../../model/pergunta.model';
import { SelectItem } from 'primeng';
import { Area } from '../../../area/model/area.model';

@Component({
  selector: 'app-form-pergunta',
  templateUrl: './form-pergunta.component.html',
  styleUrls: ['./form-pergunta.component.sass']
})
export class FormPerguntaComponent implements OnInit {

  formulario: FormGroup

  pergunta = new PerguntaModel()


  cities: City[];

  selectedCities: City[];


  areas: City[];

  areasSeleciodas: City[];


  opcoes: SelectItem[] = [{label: "opção 1", value: "opcao1"},
  {label: "opção 2", value: "opcao2"},
  {label: "opção 3", value: "opcao3"},
  {label: "opção 4", value: "opcao4"},
  {label: "opção 5", value: "opcao5"}]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.areas = [
      {name: "opção 1", code: "opcao1"},
      {name: "opção 2", code: "opcao2"},
      {name: "opção 3", code: "opcao3"}
  ];
    this.iniciarForm();
    this.pergunta.descricao = 'ssss'
  }

  iniciarForm() {
    this.formulario = this.formBuilder.group({
        descricao: [null, [Validators.required]],
        opcao1: [null, [Validators.required]],
        opcao2: [null, [Validators.required]],
        opcao3: [null, [Validators.required]],
        opcao4: [null, [Validators.required]],
        opcao5: [null, [Validators.required]],
        opcaoCorreta: [null, [Validators.required]],
        area: [null, [Validators.required]],

    }, { updateOn: "blur" });
  }

  voltar() {
    console.log("sssss", this.areasSeleciodas)

  }

  salvar(formulario) {
    console.log("sssss", this.areasSeleciodas)
  }

}

interface City {
  name: string,
  code: string
}
