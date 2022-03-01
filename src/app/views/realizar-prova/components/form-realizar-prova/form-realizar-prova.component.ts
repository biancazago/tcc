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
    id: 1, descricao: "desc da prova 1 slsmdsmmfs ofdfsdfmosdmf elfnwfsndfksfnsdfdsfs", perguntaLista: [{
      id: 2, descricao: "pergunta1", opcao1: "aaa", opcao2: "ssss",
      opcao3: "dddd", opcao4: "aas", opcao5: "cc", opcaoCorreta: "opcao1"
    },
    {
      id: 3, descricao: "<p>PERGUNTA 1!</p>", opcao1: "affdfsfsdfdfaa", opcao2: "s fddf  sss",
      opcao3: "sdsdsdadasdadad", opcao4: " fdfv df", opcao5: "c  c", opcaoCorreta: "opcao1"
    }],
    area: { id: 1, nome: "area1" }, data: new Date()
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
