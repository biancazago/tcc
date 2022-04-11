import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Professor } from '../../model/professor.model';

@Component({
  selector: 'app-form-professor',
  templateUrl: './form-professor.component.html',
  styleUrls: ['./form-professor.component.sass']
})
export class FormProfessorComponent implements OnInit {

  formulario: FormGroup

  professor = new Professor()

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
        }, { updateOn: "blur" });
  }

  voltar() {

  }

  salvar(formulario) {
    
  }


  
}
