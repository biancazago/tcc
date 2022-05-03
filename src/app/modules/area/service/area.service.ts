import { AreaModel } from '../model/area.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AreaMock } from './area-mock';

@Injectable()
export class AreaService {
  // TODO: remover chamadas mockadas ao falso back-end
  public mock: AreaMock = AreaMock.obterInstancia();
  private serviceUrl = environment.apiServiceUrl + "/area";

  constructor(private http: HttpClient) { }

  salvar(radar: AreaModel): Observable<any> {
    return this.http.post(this.serviceUrl, radar);
  }

  excluir(ids: number[]): Observable<any> {
    return this.http.delete(this.serviceUrl + "/" + ids);
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.serviceUrl}/${id}`);
  }

  converterItemFromServer(json: any): AreaModel {
    const radar: AreaModel = Object.assign(new AreaModel(), json);
    return radar;
  }

  obterTodos(): Observable<any> {
    return this.http.get(this.serviceUrl + '/listar/');
  }
}
