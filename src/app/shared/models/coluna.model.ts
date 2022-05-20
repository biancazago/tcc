export class ColunaModel {
  constructor(
    public campo?: string,
    public cabecalho?: string,
    public tamanho?: string,
    private adaptador?: (dado: unknown) => string
  ) {}

  public adaptar(dado: Record<string, any>): string {
    return !!this.adaptador ? this.adaptador(dado) : dado[this.campo];
  }
}
