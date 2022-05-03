import { Observable } from "rxjs";
import { TiposUtil } from "src/app/shared/tipos.util";
import { AlunoModel } from "../../aluno/model/aluno.model";
import { AlunoService } from "../../login/service/login.service";
import { CrudService } from "../services/crud.service";
import { ResponseUtil } from "../shared/response.util";

export class AlunoResource {
  private static instancia: AlunoResource;
  private service: CrudService<AlunoModel>;

  public static obterInstancia(): AlunoResource {
    return !!this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<AlunoModel> {
    try {
      return ResponseUtil.responder(this.service.obterPorId(id));
    } catch(erro) {
      return ResponseUtil.responder(null, {message: erro})
    }
  }

  public listar(): Observable<AlunoModel[]> {
    return ResponseUtil.responder(this.service.obterTodos());
  }

  public salvar(aluno: AlunoModel): Observable<AlunoModel> {
    return ResponseUtil.responder(TiposUtil.isNumber(aluno.id) ? this.service.alterar(aluno) : this.service.inserir(aluno));
  }

  public remover(ids: number[]): Observable<void> {
    this.service.excluir(ids);
    return ResponseUtil.responder();
  }

  public obterService(): CrudService<AlunoModel> {
    return this.service;
  }

  private constructor() {
    this.service = new CrudService();
    this.service.inserir(new AlunoModel(null, 'Bianca Zago', 'amo_Dogs!', 'bianca.dot.net@gmail.com'));
    this.service.inserir(new AlunoModel(null, 'Lívia Aurich', 'renanEhBurroBurroBurro!', 'livinha_no_ask_fm@yahoo.com'));
  }

  private static instanciar(): AlunoResource {
    this.instancia = new AlunoResource();
    return this.instancia;
  }
}
