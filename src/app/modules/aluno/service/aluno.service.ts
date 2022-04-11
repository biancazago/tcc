import { AlunoModel } from '../model/aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlunoResource } from '../../falso-backend/aluno.resource';

@Injectable()
export class AlunoService {
  private serviceUrl = environment.apiServiceUrl + "/aluno";

  constructor(private http: HttpClient) { }

  public salvar(radar: AlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(this.serviceUrl, radar);
  }

  public excluir(ids: number[]): Observable<void> {
    return this.http.delete<void>(this.serviceUrl + "/" + ids);
  }

  public obterPorId(id: number): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(`${this.serviceUrl}/${id}`);
  }

  public converterItemFromServer(json: string): AlunoModel {
    const radar: AlunoModel = Object.assign(new AlunoModel(), json);
    return radar;
  }

  public obterTodos(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.serviceUrl + '/listar/');
  }

  // TODO: remover chamadas mockadas ao falso back-end

  public mockObterTodos(): Observable<AlunoModel[]> {
    return AlunoResource.obterTodos(new Subject<AlunoModel[]>());
  }
}
