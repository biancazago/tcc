import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EsqueceuSenha } from '../../model/esqueceu-senha.model';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.sass']
})
export class EsqueceuSenhaComponent implements OnInit {

  formulario: FormGroup

  esqueceuSenha = new EsqueceuSenha()

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.formulario = this.formBuilder.group({
        email: [null, [Validators.required]],

        }, { updateOn: "blur" });
  }

  voltar() {

  }

  enviar(formulario) {
    
  }


  
}
