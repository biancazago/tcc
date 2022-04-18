export class Instituicao {
  private id: number;
  private estado: string;

  constructor() {}

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getEstado(): string {
    return this.estado;
  }

  public setEstado(estado: string): void {
    this.estado = estado;
  }
}
