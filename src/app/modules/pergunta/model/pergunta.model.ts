import { AreaModel } from '../../area/model/area.model';
import { OpcaoModel } from './opcao.model';

export class PerguntaModel {
  constructor(
    public id?: number,
    public descricao?: string,
    public opcoes?: OpcaoModel[],
    public opcaoCorreta?: OpcaoModel,
    public areas?: AreaModel[]
  ) {}
}
