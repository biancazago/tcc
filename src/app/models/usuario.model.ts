import { Instituicao } from "./instituicao.model";
import { Ocupacao } from "./ocupacao.model";

export class Usuario {
  private id: number;
  private nome: string;
  private cpf: string;
  private dataNascimento: Date;
  private ocupacao: Ocupacao;
  private instituicao: Instituicao;

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

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getDataNascimento(): Date {
    return this.dataNascimento;
  }

  public setDataNascimento(dataNascimento: Date): void {
    this.dataNascimento = dataNascimento;
  }

  public getOcupacao(): Ocupacao {
    return this.ocupacao;
  }

  public setOcupacao(ocupacao: Ocupacao): void {
    this.ocupacao = ocupacao;
  }

  public getInstuicao(): Instituicao {
    return this.instituicao;
  }

  public setInstituicao(instituicao: Instituicao): void {
    this.instituicao = instituicao;
  }
}
