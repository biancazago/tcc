export class Ocupacao {
  private id: number;
  private nome: string;
  private remuneracao: number;

  constructor() {}

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getRemuneracao(): number {
    return this.remuneracao;
  }

  public setRemuneracao(remuneracao: number): void {
    this.remuneracao = remuneracao;
  }
}
