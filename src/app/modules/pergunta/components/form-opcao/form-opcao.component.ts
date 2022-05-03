import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { OpcaoModel } from '../../model/opcao.model';

@Component({
  selector: 'app-form-opcao',
  templateUrl: './form-opcao.component.html',
  styleUrls: ['./form-opcao.component.scss']
})
export class FormOpcaoComponent implements OnInit {
  @Input() public opcao: OpcaoModel;
  @Output() public aoFinalizar: EventEmitter<OpcaoModel> = new EventEmitter();
  public formulario: FormGroup;
  public edicao: boolean = false;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.inicializarFormulario();
  }

  public salvar(): void {
    if(!this.formulario.valid) {
      PrimengUtil.mensagemErro(this.messageService, 'Erro na Criação de Opcão', 'Dados inválidos.');
      return;
    }
    this.aoFinalizar.emit(this.formulario.getRawValue());
    this.formulario.reset();
  }

  public inicializarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: new FormControl(null),
      texto: new FormControl(null, [Validators.required])
    });
    if(!!this.opcao) {
      this.formulario.patchValue(this.opcao);
      this.edicao = true;
    }
  }
}
