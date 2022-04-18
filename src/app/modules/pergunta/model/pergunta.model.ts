import { Area } from '../../area/model/area.model';
import { SelectItem } from 'primeng';
import { OpcaoModel } from './opcao.model';

export class PerguntaModel {
  constructor(
    public id?: number,
    public descricao?: string,
    public opcoes?: OpcaoModel[],
    public opcao5?: string,
    public opcao4?: string,
    public opcao3?: string,
    public opcao2?: string,
    public opcao1?: string,
    public opcaoCorreta?: SelectItem,
    public area?: Area
  ) {}
}
