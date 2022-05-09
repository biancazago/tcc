import { Observable } from "rxjs";
import { TiposUtil } from "src/app/shared/util/tipos.util";
import { AreaModel } from "../../area/model/area.model";
import { CrudService } from "../services/crud.service";
import { ResponseUtil } from "../shared/response.util";

export class AreaResource {
  private static instancia: AreaResource;
  private service: CrudService<AreaModel>;

  public static obterInstancia(): AreaResource {
    return !!this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<AreaModel> {
    try {
      return ResponseUtil.responder(this.service.obterPorId(id));
    } catch(erro) {
      return ResponseUtil.responder(null, {message: erro})
    }
  }

  public listar(): Observable<AreaModel[]> {
    return ResponseUtil.responder(this.service.obterTodos());
  }

  public salvar(area: AreaModel): Observable<AreaModel> {
    return ResponseUtil.responder(TiposUtil.isNumber(area.id) ? this.service.alterar(area) : this.service.inserir(area));
  }

  public remover(ids: number[]): Observable<void> {
    this.service.excluir(ids);
    return ResponseUtil.responder();
  }

  public obterService(): CrudService<AreaModel> {
    return this.service;
  }

  private constructor() {
    this.service = new CrudService();
    this.service.inserir(new AreaModel(null, 'Matemática', 'Questões envolvendo aritmética'));
    this.service.inserir(new AreaModel(null, 'Inglês', 'Questões de língua estrangeira moderna'));
  }

  private static instanciar(): AreaResource {
    this.instancia = new AreaResource();
    return this.instancia;
  }
}
