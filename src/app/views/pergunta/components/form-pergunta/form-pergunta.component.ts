import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pergunta } from '../../model/pergunta.model';
import { SelectItem } from 'primeng';

@Component({
  selector: 'app-form-pergunta',
  templateUrl: './form-pergunta.component.html',
  styleUrls: ['./form-pergunta.component.sass']
})
export class FormPerguntaComponent implements OnInit {

  formulario: FormGroup

  pergunta = new Pergunta()

  opcoes: SelectItem[] = [{label: "opção 1", value: "opcao1"},
  {label: "opção 2", value: "opcao2"},
  {label: "opção 3", value: "opcao3"},
  {label: "opção 4", value: "opcao4"},
  {label: "opção 5", value: "opcao5"}]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
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
      
    }, { updateOn: "blur" });
  }

  voltar() {

  }

  salvar(formulario) {
    
  }


  
}
