import { Observable } from "rxjs";
import { TiposUtil } from "src/app/shared/util/tipos.util";
import { ProfessorModel } from "../../professor/model/professor.model";
import { CrudService } from "../services/crud.service";
import { ResponseUtil } from "../shared/response.util";

export class ProfessorResource {
  private static instancia: ProfessorResource;
  private service: CrudService<ProfessorModel>;

  public static obterInstancia(): ProfessorResource {
    return !!this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<ProfessorModel> {
    try {
      return ResponseUtil.responder(this.service.obterPorId(id));
    } catch(erro) {
      return ResponseUtil.responder(null, {message: erro})
    }
  }

  public listar(): Observable<ProfessorModel[]> {
    return ResponseUtil.responder(this.service.obterTodos());
  }

  public salvar(professor: ProfessorModel): Observable<ProfessorModel> {
    return ResponseUtil.responder(TiposUtil.isNumber(professor.id) ? this.service.alterar(professor) : this.service.inserir(professor));
  }

  public remover(ids: number[]): Observable<void> {
    this.service.excluir(ids);
    return ResponseUtil.responder();
  }

  public obterService(): CrudService<ProfessorModel> {
    return this.service;
  }

  private constructor() {
    this.service = new CrudService();
    this.service.inserir(new ProfessorModel(null, 'Julio Vendramini', 'reguaNOquadro@hotmail.com'));
    this.service.inserir(new ProfessorModel(null, 'Vanderson', 'vandergod@protonmail.com'));
  }

  private static instanciar(): ProfessorResource {
    this.instancia = new ProfessorResource();
    return this.instancia;
  }
}
