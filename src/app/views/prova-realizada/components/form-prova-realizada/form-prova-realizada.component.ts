import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProvaRealizada } from '../../model/prova-realizada.model';
import { Page } from '../../../../shared/page';

@Component({
  selector: 'app-form-prova-realizada',
  templateUrl: './form-prova-realizada.component.html',
  styleUrls: ['./form-prova-realizada.component.sass']
})
export class FormProvaRealizadaComponent implements OnInit {

  formulario: FormGroup

  // provaRealizada = new ProvaRealizada()

  selectedValue: string[] = [];


  cols = [
    { field: 'id', header: 'ID' },
    { field: 'descricao', header: 'Descrição' },
    { field: 'opcaoMarcada', header: 'Opção Marcada' },
    { field: 'opcaoCorreta', header: 'Opção Correta' },
    { field: 'resultado', header: 'Resultado' },

    

  ];

  public pageResponse: Page<ProvaRealizada> = new Page();

  text: string = "<p>PERGUNTA 1!</p><p>PrimeNG <strong>Editor</strong>"


  provaRealizada = {
    id: 1, prova: {
      id: 1, descricao: "desc da prova 1 slsmdsmmfs ofdfsdfmosdmf elfnwfsndfksfnsdfdsfs", perguntaLista: [{
        id: 2, descricao: "pergunta1", opcao1: "aaa", opcao2: "ssss",
        opcao3: "dddd", opcao4: "aas", opcao5: "cc", opcaoCorreta: "opcao1"
      }]
    }, perguntaRespondidaList: [{ idPergunta: 2, opcaoMarcada: "opcao1" }], dataRealizacao: new Date(),
    aluno: { id: 1, nome: "marcos", email: "marcis@hotmail.com" }, professor: { id: 2, nome: "Tião"}
  };



  list: any[] = []


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
   
    this.preencherTabela();

  }

  preencherTabela() {

    this.list = this.list.concat(this.provaRealizada.prova.perguntaLista)
    this.list.forEach(element => {
      element.opcaoMarcada = this.provaRealizada.perguntaRespondidaList.filter(a => a.idPergunta == element.id)[0].opcaoMarcada
      element.resultado = element.opcaoMarcada == element.opcaoCorreta ? "Acertou" : "Errou"

    });

    this.pageResponse.content = this.list
    this.pageResponse.totalElements = 2
    this.pageResponse.totalPages = 1


    // this.list.concat(this.provaRealizada.perguntaRespondidaList).concat(this.provaRealizada.prova.perguntaLista)
  }

  voltar() {

  }

  salvar(formulario) {

    console.log(formulario);
  }



}
