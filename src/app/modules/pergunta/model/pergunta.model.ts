import { Area } from '../../area/model/area.model';
import { SelectItem } from 'primeng';

export class Pergunta {

    id: number;
    descricao: string;
    opcao: string[];
    opcao5: string;
    opcao4: string;
    opcao3: string;
    opcao2: string;
    opcao1: string;

    opcaoCorreta: SelectItem;
    area: Area
}
