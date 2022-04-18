import { Observable } from "rxjs";
import { PerguntaResource } from "../../falso-backend/resources/pergunta.resource";
import { PerguntaModel } from "../model/pergunta.model";

export class PerguntaMock {
  private static instancia: PerguntaMock;
  private resource: PerguntaResource;

  public static obterInstancia(): PerguntaMock {
    return this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<PerguntaModel> {
    return this.resource.obter(id);
  }

  public obterTodos(): Observable<PerguntaModel[]> {
    return this.resource.listar();
  }

  public salvar(aluno: PerguntaModel): Observable<PerguntaModel> {
    return this.resource.salvar(aluno);
  }

  public excluir(ids: number[]): Observable<void> {
    return this.resource.remover(ids);
  }

  private constructor() {
    this.resource = PerguntaResource.obterInstancia();
  }

  private static instanciar(): PerguntaMock {
    this.instancia = new PerguntaMock();
    return this.instancia;
  }
}
