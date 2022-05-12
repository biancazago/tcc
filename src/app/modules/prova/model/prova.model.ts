import { PerguntaModel } from "../../pergunta/model/pergunta.model";
import { ProfessorModel } from "../../professor/model/professor.model";

export class ProvaModel {
  constructor(
    public id?: number,
    public nome?: String,
    public descricao?: string,
    public professor?: ProfessorModel,
    public data?: Date,
    public areas?: string,
    public perguntaLista: PerguntaModel[] = []
  ) {}
}
