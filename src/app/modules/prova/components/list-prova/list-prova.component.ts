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
  public provas: ProvaModel[] = [
    new ProvaModel(1, 'Prova de Matematica', 'Questões de Aritmética', new ProfessorModel(
      1, 'Marcela Ferraz', 'marcelinha@yahoo.com'
    ), new Date(), 'Matemática', []),
    new ProvaModel(2, 'Prova de Geografia', 'Latitude e Longitude', new ProfessorModel(
      1, 'Reginaldo Antonio', 'ferron@velhaguarda.com'
    ), new Date(), 'Geografia', []),
  ];
  public colunas: ColunaModel[] = [
    new ColunaModel('id', 'ID', '64px'),
    new ColunaModel('nome', 'Nome', '200px'),
    new ColunaModel('descricao', 'Descrição', '200px'),
    new ColunaModel('data', 'Data', '100px'),
    new ColunaModel('areas', 'Áreas', '100px'),
  ];
}
