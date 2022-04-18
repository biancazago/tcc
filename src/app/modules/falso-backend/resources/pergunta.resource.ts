import { Observable } from "rxjs";
import { CrudResource } from "src/app/shared/util/crud.resource";
import { FuncoesUtil } from "src/app/shared/util/funcoes.util";
import { PrimengUtil } from "src/app/shared/util/primeng.util";
import { OpcaoModel } from "../../pergunta/model/opcao.model";
import { PerguntaModel } from "../../pergunta/model/pergunta.model";
import { ResponseUtil } from "../shared/response.util";

export class PerguntaResource extends CrudResource<PerguntaModel> {
  private static instancia: PerguntaResource;

  public static obterInstancia(): PerguntaResource {
    return !!this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<PerguntaModel> {
    try {
      return ResponseUtil.responder(this.obterPorId(id));
    } catch(erro) {
      return ResponseUtil.responder(null, {message: erro})
    }
  }

  public listar(): Observable<PerguntaModel[]> {
    return ResponseUtil.responder(this.dados);
  }

  public salvar(pergunta: PerguntaModel): Observable<PerguntaModel> {
    return ResponseUtil.responder(FuncoesUtil.isNumber(pergunta.id) ? this.alterar(pergunta) : this.inserir(pergunta));
  }

  public remover(ids: number[]): Observable<void> {
    this.excluir(ids);
    return ResponseUtil.responder();
  }

  private constructor() {
    super();
    let opcaoCorreta1: OpcaoModel = new OpcaoModel(5, '6');
    this.inserir(new PerguntaModel(null, 'Dado que o cubo tem seis faces, qual é o maior número se ele começar a numeração em 1?', [
      new OpcaoModel(1, '2'),
      new OpcaoModel(2, '5'),
      new OpcaoModel(3, '8'),
      new OpcaoModel(4, '9'),
      opcaoCorreta1
    ], null, null, null, null, null, PrimengUtil.criarSelectItem(opcaoCorreta1.texto, opcaoCorreta1)));
    let opcaoCorreta2: OpcaoModel = new OpcaoModel(9, 'Trilhos');
    this.inserir(new PerguntaModel(null, 'O trem é um veículo que anda sobre...', [
      new OpcaoModel(6, 'Asfalto'),
      new OpcaoModel(7, 'Terra'),
      new OpcaoModel(8, 'Água'),
      opcaoCorreta2,
      new OpcaoModel(10, 'Ladrilhos')
    ], null, null, null, null, null, PrimengUtil.criarSelectItem(opcaoCorreta2.texto, opcaoCorreta2)));
  }

  private static instanciar(): PerguntaResource {
    this.instancia = new PerguntaResource();
    return this.instancia;
  }
}
