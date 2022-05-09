
export class ProvaRealizadaModel {
  constructor(
    public id: number,
    public idProva: number,
    public nome: string,
    public professor: string,
    public aluno: string,
    public data: Date,
    public pontuacao: number
  ) {}
}
