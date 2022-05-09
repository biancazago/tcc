import { Observable } from "rxjs";
import { TiposUtil } from "src/app/shared/util/tipos.util";
import { AreaModel } from "../../area/model/area.model";
import { OpcaoModel } from "../../pergunta/model/opcao.model";
import { PerguntaModel } from "../../pergunta/model/pergunta.model";
import { CrudRelacionadoService } from "../services/crud-relacionado.service";
import { CrudService } from "../services/crud.service";
import { ResponseUtil } from "../shared/response.util";
import { AreaResource } from "./area.resource";

export class PerguntaResource implements CrudRelacionadoService<PerguntaModel> {
  private static instancia: PerguntaResource;
  private areaResource: AreaResource;
  private service: CrudService<PerguntaModel>;
  private sequenceIdOpcao: number = 1;

  public static obterInstancia(): PerguntaResource {
    return !!this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<PerguntaModel> {
    try {
      return ResponseUtil.responder(this.service.obterPorId(id));
    } catch(erro) {
      return ResponseUtil.responder(null, {message: erro})
    }
  }

  public listar(): Observable<PerguntaModel[]> {
    return ResponseUtil.responder(this.service.obterTodos());
  }

  public salvar(pergunta: PerguntaModel): Observable<PerguntaModel> {
    return (ResponseUtil.responder(TiposUtil.isNumber(pergunta.id) ?
      this.tratarRelacionamento(this.service.alterar(this.tratarRelacionamento(pergunta, true)), false) :
      this.tratarRelacionamento(this.service.inserir(this.tratarRelacionamento(pergunta, true)), false)
    ));
  }

  public remover(ids: number[]): Observable<void> {
    this.service.excluir(ids);
    return ResponseUtil.responder();
  }

  public tratarRelacionamento(objeto: PerguntaModel, persistencia: boolean): PerguntaModel {
    if(persistencia) {
      objeto.opcoes.forEach((opcao: OpcaoModel) => opcao.id = opcao.id ? opcao.id : this.sequenceIdOpcao++);
      objeto.areas.forEach((area: AreaModel) => this.areaResource.obterService().alterar(area));
      (objeto as Record<string, any>).areas = objeto.areas.map((area: AreaModel) => area.id);
      return objeto;
    }
    (objeto as Record<string, any>).areas.map((id: number) => this.areaResource.obterService().obterPorId(id));
    return objeto;
  }

  public obterService(): CrudService<PerguntaModel> {
    return this.service;
  }

  private constructor() {
    this.service = new CrudService();
    this.areaResource = AreaResource.obterInstancia();
  }

  private static instanciar(): PerguntaResource {
    this.instancia = new PerguntaResource();
    return this.instancia;
  }
}
