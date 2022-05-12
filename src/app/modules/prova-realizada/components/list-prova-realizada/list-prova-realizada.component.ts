import { Component } from '@angular/core';
import { ProvaRealizadaModel } from '../../model/prova-realizada.model';

@Component({
  selector: 'app-list-prova-realizada',
  templateUrl: './list-prova-realizada.component.html',
  styleUrls: ['./list-prova-realizada.component.scss']
})
export class ListProvaRealizadaComponent {
  public mostrarFiltros: boolean = false;
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
  public filtroAluno?: string;
  public filtroProfessor?: string;
  public filtroDataInicial?: Date;
  public filtroDataFinal?: Date;

  constructor() { }

  public obterProvasFiltradas(): ProvaRealizadaModel[] {
    let provasFiltradas: ProvaRealizadaModel[] = [...this.provas];
    provasFiltradas = provasFiltradas.filter((prova) => this.aprovarFiltro(this.contemTexto(prova.aluno, this.filtroAluno), this.filtroAluno));
    provasFiltradas = provasFiltradas.filter((prova) => this.aprovarFiltro(this.contemTexto(prova.professor, this.filtroProfessor), this.filtroProfessor));
    provasFiltradas = provasFiltradas.filter((prova) => this.aprovarFiltro(prova.data > this.filtroDataInicial, this.filtroDataInicial));
    provasFiltradas = provasFiltradas.filter((prova) => this.aprovarFiltro(prova.data < this.filtroDataFinal, this.filtroDataFinal));
    return provasFiltradas;
  }

  private contemTexto(base: string, alvo: string, caseSensitive: boolean = false): boolean {
    if(!alvo || !base) {
      return true;
    }
    base = !caseSensitive ? base.toLocaleLowerCase() : base;
    alvo = !caseSensitive ? alvo.toLocaleLowerCase() : alvo;
    return base.includes(alvo);
  }

  private aprovarFiltro<T>(veredito: boolean, filtro: T): boolean {
    return !!filtro ? veredito : true;
  }
}
