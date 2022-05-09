export class TiposUtil {
    public static isNumber(alvo: any, checarTipo: boolean = true, permitirNaN: boolean = false): boolean {
        let NaNPermitido: boolean = this.isNumberOuNaN(alvo, checarTipo);
        let NaNNaoPermitido: boolean = NaNPermitido && !this.isNaN(alvo);
        return permitirNaN ? NaNPermitido : NaNNaoPermitido;
    }

    public static isString<T>(alvo: T): boolean {
        return typeof alvo === typeof '';
    }

    public static isBoolean<T>(alvo: T): boolean {
        return typeof alvo === typeof true;
    }

    public static isFunction<T>(alvo: T): boolean {
        return typeof alvo === typeof (() => {});
    }

    public static isObject<T>(alvo: T): boolean {
        return typeof alvo === typeof {};
    }

    public static isNaN(alvo: any): boolean {
        return alvo === NaN;
    }

    public static isNull(alvo: any, excluirUndefined: boolean = false): boolean {
        return excluirUndefined ? alvo === null : alvo == null;
    }

    public static isUndefined(alvo: any): boolean {
        return alvo === undefined;
    }

    private static isNumberOuNaN(alvo: any, checarTipo: boolean = true): boolean {
        return checarTipo ? typeof alvo == typeof 0 : typeof alvo == typeof 0;
    }
}
