export class FuncoesUtil {
  public static clonarObjetoProfundamente<T>(objeto: T): T {
    return JSON.parse(JSON.stringify(objeto));
  }

  public static converterItemDoServidor<T>(objeto: Record<string, any>, instanciador: () => T): T {
    return Object.assign(instanciador(), objeto);
  }

  public static isObject<T>(alvo: T): boolean {
    return typeof alvo === typeof {};
  }

  public static isString<T>(alvo: T): boolean {
    return typeof alvo === typeof '';
  }

  public static isNumber<T>(alvo: T): boolean {
    return typeof alvo === typeof 0;
  }

  public static isBoolean<T>(alvo: T): boolean {
    return typeof alvo === typeof false;
  }

  public static isFunction<T>(alvo: T): boolean {
    return typeof alvo === typeof (() => {});
  }

  public static isArray<T>(alvo: T): boolean {
    return typeof alvo === typeof [];
  }
}
