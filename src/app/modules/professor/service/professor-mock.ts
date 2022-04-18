import { Observable } from "rxjs";
import { ProfessorResource } from "../../falso-backend/resources/professor.resource";
import { ProfessorModel } from "../model/professor.model";

export class ProfessorMock {
  private static instancia: ProfessorMock;
  private resource: ProfessorResource;

  public static obterInstancia(): ProfessorMock {
    return this.instancia ? this.instancia : this.instanciar();
  }

  public obter(id: number): Observable<ProfessorModel> {
    return this.resource.obter(id);
  }

  public obterTodos(): Observable<ProfessorModel[]> {
    return this.resource.listar();
  }

  public salvar(aluno: ProfessorModel): Observable<ProfessorModel> {
    return this.resource.salvar(aluno);
  }

  public excluir(ids: number[]): Observable<void> {
    return this.resource.remover(ids);
  }

  private constructor() {
    this.resource = ProfessorResource.obterInstancia();
  }

  private static instanciar(): ProfessorMock {
    this.instancia = new ProfessorMock();
    return this.instancia;
  }
}
