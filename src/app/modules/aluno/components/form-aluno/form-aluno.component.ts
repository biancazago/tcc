import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlunoModel } from '../../model/aluno.model';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.sass']
})
export class FormAlunoComponent implements OnInit {

  formulario: FormGroup

  aluno = new AlunoModel()

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      senhaConfirmada: [null, [Validators.required]]

    }, { updateOn: "blur" });
  }

  voltar() {

  }

  salvar(formulario) {

  }



}
