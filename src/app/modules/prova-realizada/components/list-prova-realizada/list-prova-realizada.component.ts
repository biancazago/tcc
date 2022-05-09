import { Component } from '@angular/core';
import { ProvaRealizadaModel } from '../../model/prova-realizada.model';

@Component({
  selector: 'app-list-prova-realizada',
  templateUrl: './list-prova-realizada.component.html',
  styleUrls: ['./list-prova-realizada.component.scss']
})
export class ListProvaRealizadaComponent {
  public provas: ProvaRealizadaModel[] = [
    new ProvaRealizadaModel(1, 5, 'Prova de física 1', 'Tião Morelato', 'João José', new Date('2021-12-01T00:00:00'), 80),
    new ProvaRealizadaModel(1, 5, 'Prova de geografia avançada', 'Marcela Ferraz', 'João José', new Date('2020-07-25T00:00:00'), 50),
    new ProvaRealizadaModel(1, 5, 'Prova de física 1', 'Tião Morelato', 'João José', new Date('2021-12-01T00:00:00'), 80),
    new ProvaRealizadaModel(1, 5, 'Prova de geografia avançada', 'Marcela Ferraz', 'João José', new Date('2020-07-25T00:00:00'), 50),
    new ProvaRealizadaModel(1, 5, 'Prova de física 1', 'Tião Morelato', 'João José', new Date('2021-12-01T00:00:00'), 80),
    new ProvaRealizadaModel(1, 5, 'Prova de geografia avançada', 'Marcela Ferraz', 'João José', new Date('2020-07-25T00:00:00'), 50),
    new ProvaRealizadaModel(1, 5, 'Prova de física 1', 'Tião Morelato', 'João José', new Date('2021-12-01T00:00:00'), 80),
    new ProvaRealizadaModel(1, 5, 'Prova de geografia avançada', 'Marcela Ferraz', 'João José', new Date('2020-07-25T00:00:00'), 50),
    new ProvaRealizadaModel(1, 5, 'Prova de física 1', 'Tião Morelato', 'João José', new Date('2021-12-01T00:00:00'), 80),
    new ProvaRealizadaModel(1, 5, 'Prova de geografia avançada', 'Marcela Ferraz', 'João José', new Date('2020-07-25T00:00:00'), 50),
    new ProvaRealizadaModel(1, 5, 'Prova de física 1', 'Tião Morelato', 'João José', new Date('2021-12-01T00:00:00'), 80),
    new ProvaRealizadaModel(1, 5, 'Prova de geografia avançada', 'Marcela Ferraz', 'João José', new Date('2020-07-25T00:00:00'), 50),
  ];
  public provaSelecionada?: ProvaRealizadaModel;

  constructor() { }
}
