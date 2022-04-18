import { FuncoesUtil } from "./funcoes.util";

interface Identificavel {
  id?: number;
}

export class CrudResource<T extends Identificavel> {
  protected dados: T[];
  protected sequenceId: number;

  protected constructor(dadosIniciais: T[] = [], sequenceId: number = 0) {
    this.dados = dadosIniciais ? dadosIniciais : [];
    this.sequenceId = sequenceId;
  }

  protected gerarSequenceId() {
    return this.sequenceId++;
  }

  protected obterTodos(): T[] {
    return this.dados;
  }

  protected obterPorId(id: number): T {
    let resultado: T = this.dados.find((dado: T) => dado.id === id);
    if(!resultado) {
      throw new Error(this.gerarMensagemIdsNaoEncontrados([id]));
    }
    return resultado;
  }

  protected inserir(dado: T): T {
    let id: number = this.gerarSequenceId();
    dado.id = id;
    this.dados.push(dado);
    return this.obterPorId(id);
  }

  protected alterar(dado: T): T {
    if(FuncoesUtil.isNumber(dado.id)) {
      let posicao: number = this.dados.findIndex((dadoSalvo: T) => dadoSalvo.id === dado.id);
      this.dados[posicao] = (posicao > -1) ? dado : this.dados[posicao];
      return (posicao > -1) ? this.obterPorId(dado.id) : this.inserir(dado);
    }
    throw new Error(`Não é possível alterar um registro sem ID.`);
  }

  protected excluir(ids: number[]): void {
    let idsNaoEncontrados: number[] = [];
    ids.forEach((id: number) => {
      let posicao: number = this.dados.findIndex((dado: T) => dado.id === id);
      if(posicao > -1) {
        this.dados.splice(posicao, 1);
        return;
      }
      idsNaoEncontrados.push(id);
    });
    if(idsNaoEncontrados.length > 0) {
      throw new Error(this.gerarMensagemIdsNaoEncontrados(idsNaoEncontrados));
    }
  }

  private gerarMensagemIdsNaoEncontrados(ids: number[]): string {
    return `Não existem registros com os ID's ${ids.join(', ')}.`;
  }
}
