import { Observable } from "rxjs";
import { AreaResource } from "../../falso-backend/resources/area.resource";
import { AreaModel } from "../model/area.model";

export class AreaMock {
  private static instancia: AreaMock;
  private resource: AreaResource;

  public static obterInstancia(): AreaMock {
    return this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<AreaModel> {
    return this.resource.obter(id);
  }

  public obterTodos(): Observable<AreaModel[]> {
    return this.resource.listar();
  }

  public salvar(area: AreaModel): Observable<AreaModel> {
    return this.resource.salvar(area);
  }

  public excluir(ids: number[]): Observable<void> {
    return this.resource.remover(ids);
  }

  private constructor() {
    this.resource = AreaResource.obterInstancia();
  }

  private static instanciar(): AreaMock {
    this.instancia = new AreaMock();
    return this.instancia;
  }
}
