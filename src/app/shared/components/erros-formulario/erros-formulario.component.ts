import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { MensagemValidacao } from '../../models/mensagem-validacao';

@Component({
  selector: 'app-erros-formulario',
  templateUrl: './erros-formulario.component.html',
  styleUrls: ['./erros-formulario.component.scss']
})
export class ErrosFormularioComponent {
  @Input() public nomeDoCampo: string;
  @Input() public mensagensValidacao: MensagemValidacao[] = [];
  @Input() public obrigatorioPadrao: boolean = true;
  @Input() public mensagemObrigatorioPadrao: string = 'Campo Obrigatório';

  constructor(private formGroupDirective: FormGroupDirective) { }

  public obterCampo(): AbstractControl {
    return this.formGroupDirective.control.get(this.nomeDoCampo);
  }

  public ehCampoInvalido(): boolean {
    return !this.obterCampo().valid && (this.obterCampo().dirty || this.obterCampo().touched && !this.obterCampo().valid);
  }
}
