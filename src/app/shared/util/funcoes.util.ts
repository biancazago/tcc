export class FuncoesUtil {
  public static clonarObjetoProfundamente<T>(objeto: T): T {
    return JSON.parse(JSON.stringify(objeto));
  }
}
