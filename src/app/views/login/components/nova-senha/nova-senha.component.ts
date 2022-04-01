import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NovaSenha } from '../../model/nova-senha.model';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.sass']
})
export class NovaSenhaComponent implements OnInit {

  formulario: FormGroup

  novaSenha = new NovaSenha()

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.formulario = this.formBuilder.group({
      senhaAtual: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      senhaConfirmada: [null, [Validators.required]],

        }, { updateOn: "blur" });
  }

  voltar() {

  }

  salvar(formulario) {
    
  }


  
}
