import { ProfessorModel } from '../model/professor.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessorMock } from './professor-mock';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfessorService {
  // TODO: remover chamadas mockadas ao falso back-end
  public mock: ProfessorMock = ProfessorMock.obterInstancia();
  serviceUrl = environment.apiServiceUrl + "/professor";

  constructor(private http: HttpClient) { }

  salvar(radar: ProfessorModel): Observable<any> {
    return this.http.post(this.serviceUrl, radar);
  }

  excluir(ids: number[]): Observable<any> {
    return this.http.delete(this.serviceUrl + "/" + ids);
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.serviceUrl}/${id}`);
  }

  converterItemFromServer(json: any): ProfessorModel {
    const radar: ProfessorModel = Object.assign(new ProfessorModel(), json);
    return radar;
  }

  obterTodos(): Observable<any> {
    return this.http.get(this.serviceUrl + '/listar/');
  }
}
