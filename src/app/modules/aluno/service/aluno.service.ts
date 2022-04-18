import { AlunoModel } from '../model/aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlunoMock } from './aluno-mock';

@Injectable()
export class AlunoService {
  // TODO: remover chamadas mockadas ao falso back-end
  public mock: AlunoMock = AlunoMock.obterInstancia();
  private serviceUrl = environment.apiServiceUrl + "/aluno";

  constructor(private http: HttpClient) { }

  public salvar(aluno: AlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(this.serviceUrl, aluno);
  }

  public excluir(ids: number[]): Observable<void> {
    return this.http.delete<void>(this.serviceUrl + "/" + ids);
  }

  public obterPorId(id: number): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(`${this.serviceUrl}/${id}`);
  }

  public obterTodos(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.serviceUrl + '/listar/');
  }
}
