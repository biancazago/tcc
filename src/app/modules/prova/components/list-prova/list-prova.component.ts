import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProfessorModel } from 'src/app/modules/professor/model/professor.model';
import { ColunaModel } from 'src/app/shared/models/coluna.model';
import { ProvaModel } from '../../model/prova.model';

@Component({
  selector: 'app-list-prova',
  templateUrl: './list-prova.component.html',
  styleUrls: ['./list-prova.component.sass']
})
export class ListProvaComponent {
  public hoje: Date = new Date();
  public anoPassado: Date = new Date(this.hoje.getFullYear() - 1);
  public provas: ProvaModel[] = [
    new ProvaModel(1, 'Prova de Matematica', 'Questões de Aritmética', new ProfessorModel(
      1, 'Marcela Ferraz', 'marcelinha@yahoo.com'
    ), this.hoje, 'Matemática', []),
    new ProvaModel(2, 'Prova de Geografia', 'Latitude e Longitude', new ProfessorModel(
      1, 'Reginaldo Antonio', 'ferron@velhaguarda.com'
    ), this.anoPassado, 'Geografia', []),
  ];
  public colunas: ColunaModel[] = []

  constructor(private datePipe: DatePipe) {
    this.colunas = [
      new ColunaModel('id', 'ID', '64px'),
      new ColunaModel('nome', 'Nome', '200px'),
      new ColunaModel('descricao', 'Descrição', '200px'),
      new ColunaModel('data', 'Data', '100px', (prova: ProvaModel) => datePipe.transform(prova.data, 'dd/MM/yyyy')),
      new ColunaModel('areas', 'Áreas', '100px'),
    ];
  }
}
