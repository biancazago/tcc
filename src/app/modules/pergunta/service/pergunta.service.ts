import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PerguntaModel } from "../model/pergunta.model";
import { PerguntaMock } from "./pergunta-mock";


@Injectable()
export class PerguntaService {
  // TODO: remover chamadas mockadas ao falso back-end
  public mock: PerguntaMock = PerguntaMock.obterInstancia();
  serviceUrl = environment.apiServiceUrl + "/pergunta";

  constructor(private http: HttpClient) { }

  salvar(radar: PerguntaModel): Observable<any> {
    return this.http.post(this.serviceUrl, radar);
  }

  excluir(ids: number[]): Observable<any> {
    return this.http.delete(this.serviceUrl + "/" + ids);
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.serviceUrl}/${id}`);
  }

  converterItemFromServer(json: any): PerguntaModel {
    const radar: PerguntaModel = Object.assign(new PerguntaModel(), json);
    return radar;
  }

  obterTodos(): Observable<any> {
    return this.http.get(this.serviceUrl + '/listar/');
  }
}
