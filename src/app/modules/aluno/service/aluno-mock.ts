import { Observable } from "rxjs";
import { AlunoResource } from "../../falso-backend/resources/aluno.resource";
import { AlunoModel } from "../model/aluno.model";

export class AlunoMock {
  private static instancia: AlunoMock;
  private resource: AlunoResource;

  public static obterInstancia(): AlunoMock {
    return this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<AlunoModel> {
    return this.resource.obter(id);
  }

  public obterTodos(): Observable<AlunoModel[]> {
    return this.resource.listar();
  }

  public salvar(aluno: AlunoModel): Observable<AlunoModel> {
    return this.resource.salvar(aluno);
  }

  public excluir(ids: number[]): Observable<void> {
    return this.resource.remover(ids);
  }

  private constructor() {
    this.resource = AlunoResource.obterInstancia();
  }

  private static instanciar(): AlunoMock {
    this.instancia = new AlunoMock();
    return this.instancia;
  }
}
