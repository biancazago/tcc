import { Identificavel } from "../../../shared/util/identificavel";

export interface CrudRelacionadoService<T extends Identificavel> {
  tratarRelacionamento(objeto: T, persistencia: boolean): T;
}
