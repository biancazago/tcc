import { Observable } from "rxjs";
import { CrudResource } from "src/app/shared/util/crud.resource";
import { FuncoesUtil } from "src/app/shared/util/funcoes.util";
import { ProfessorModel } from "../../professor/model/professor.model";
import { ResponseUtil } from "../shared/response.util";

export class ProfessorResource extends CrudResource<ProfessorModel> {
  private static instancia: ProfessorResource;

  public static obterInstancia(): ProfessorResource {
    return !!this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<ProfessorModel> {
    try {
      return ResponseUtil.responder(this.obterPorId(id));
    } catch(erro) {
      return ResponseUtil.responder(null, {message: erro})
    }
  }

  public listar(): Observable<ProfessorModel[]> {
    return ResponseUtil.responder(this.dados);
  }

  public salvar(professor: ProfessorModel): Observable<ProfessorModel> {
    return ResponseUtil.responder(FuncoesUtil.isNumber(professor.id) ? this.alterar(professor) : this.inserir(professor));
  }

  public remover(ids: number[]): Observable<void> {
    this.excluir(ids);
    return ResponseUtil.responder();
  }

  private constructor() {
    super();
    this.inserir(new ProfessorModel(null, 'Julio Vendramini', 'reguaNOquadro@hotmail.com'));
    this.inserir(new ProfessorModel(null, 'Vanderson', 'vandergod@protonmail.com'));
  }

  private static instanciar(): ProfessorResource {
    this.instancia = new ProfessorResource();
    return this.instancia;
  }
}
