import { Observable } from "rxjs";
import { CrudResource } from "src/app/shared/util/crud.resource";
import { FuncoesUtil } from "src/app/shared/util/funcoes.util";
import { AlunoModel } from "../../aluno/model/aluno.model";
import { ResponseUtil } from "../shared/response.util";

export class AlunoResource extends CrudResource<AlunoModel> {
  private static instancia: AlunoResource;

  public static obterInstancia(): AlunoResource {
    return !!this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<AlunoModel> {
    try {
      return ResponseUtil.responder(this.obterPorId(id));
    } catch(erro) {
      return ResponseUtil.responder(null, {message: erro})
    }
  }

  public listar(): Observable<AlunoModel[]> {
    return ResponseUtil.responder(this.dados);
  }

  public salvar(aluno: AlunoModel): Observable<AlunoModel> {
    return ResponseUtil.responder(FuncoesUtil.isNumber(aluno.id) ? this.alterar(aluno) : this.inserir(aluno));
  }

  public remover(ids: number[]): Observable<void> {
    this.excluir(ids);
    return ResponseUtil.responder();
  }

  private constructor() {
    super();
    this.inserir(new AlunoModel(null, 'Bianca Zago', 'amo_Dogs!', 'bianca.dot.net@gmail.com'));
    this.inserir(new AlunoModel(null, 'Lívia Aurich', 'renanEhBurroBurroBurro!', 'livinha_no_ask_fm@yahoo.com'));
  }

  private static instanciar(): AlunoResource {
    this.instancia = new AlunoResource();
    return this.instancia;
  }
}
