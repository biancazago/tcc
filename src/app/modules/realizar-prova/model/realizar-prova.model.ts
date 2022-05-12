import { PerguntaModel } from "../../pergunta/model/pergunta.model";

export class RealizarProvaModel {
  constructor(
    public id?: number,
    public nome?: String,
    public descricao?: string,
    public professor?: string,
    public data?: Date,
    public area?: string,
    public perguntaLista: PerguntaModel[] = []
  ) { }
}
