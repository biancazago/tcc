import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Area } from '../../model/area.model';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.sass']
})
export class FormAreaComponent implements OnInit {

  formulario: FormGroup

  area = new Area()

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
    
  }


  
}
