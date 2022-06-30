import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RealizarProva } from '../../model/realizar-prova.model';

@Component({
  selector: 'app-form-realizar-prova',
  templateUrl: './form-realizar-prova.component.html',
  styleUrls: ['./form-realizar-prova.component.sass']
})
export class FormRealizarProvaComponent implements OnInit {

  formulario: FormGroup

  realizarProva = new RealizarProva()

  selectedValue: string[] = [];


  text: string = "<p>PERGUNTA 1!</p><p>PrimeNG <strong>Editor</strong>"
  
  prova = {
    id: 1, descricao: " Podemos já vislumbrar o modo pelo qual o novo modelo estrutural aqui preconizado representa uma abertura para a melhoria do fluxo de informações.", perguntaLista: [{
      id: 2, descricao: "Loorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", 
      opcao1: "sed do eiusmod", opcao2: "XPTO", opcao3: "Loorem ipsum dolor", opcao4: "Loorem ipsum", opcao5: "consectetur adipiscing", opcaoCorreta: "opcao1"
    },
    {
      id: 3, descricao: "<p>Loorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 1!</p>", 
      opcao1: "sed do eiusmod", opcao2: "XPTO", opcao3: "Loorem ipsum dolor", opcao4: "Loorem ipsum", opcao5: "consectetur adipiscing", opcaoCorreta: "opcao1"
    }],
    area: { id: 1, nome: "programação" }, data: new Date()
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
    }, { updateOn: "blur" });
  }

  voltar() {

  }

  salvar(formulario) {

    console.log(formulario);
  }



}
