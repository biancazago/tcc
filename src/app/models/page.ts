export class Page<T> {
  public content: T[] = [];
  public last: boolean;
  public totalElements: number;
  public totalPages: number;
  public size: number;
  public number: number;
  public numberOfElements: number;
  public sort: string;
  public first: boolean;
  private static readonly TAMANHO_PADRAO: number = 10;

  public static paginar<T>(
    conteudo: T[] = [],
    numeroPagina: number = 1,
    tamanhoPagina: number = this.TAMANHO_PADRAO,
    ordenacao?: string
  ): Page<T> {
    let pagina: Page<T> = new Page();
    numeroPagina = Math.round(numeroPagina);
    tamanhoPagina = Math.round(tamanhoPagina);
    pagina.totalPages = Math.ceil(conteudo.length / tamanhoPagina);
    pagina.number = numeroPagina > 0 && numeroPagina < pagina.totalPages ? numeroPagina : 1;
    pagina.size = tamanhoPagina;
    pagina.totalElements = conteudo.length;
    pagina.content = conteudo.slice(pagina.size * pagina.number, pagina.size);
    pagina.first = pagina.number === 1;
    pagina.last = pagina.number === pagina.totalPages;
    pagina.numberOfElements = pagina.content.length;
    pagina.sort = ordenacao;
    return pagina;
  }

  public static paginaPorIndice(indice: number, tamanhoPagina: number = this.TAMANHO_PADRAO): number {
    return Math.ceil(indice / tamanhoPagina);
  }
}
