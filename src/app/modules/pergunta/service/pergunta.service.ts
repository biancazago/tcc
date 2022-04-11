import { Pergunta } from '../model/pergunta.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class PerguntaService {

    serviceUrl = "/pergunta" //environment.apiServiceUrl + "/pergunta";

    constructor(private http: HttpClient) { }

    salvar(radar: Pergunta): Observable<any> {
        return this.http.post(this.serviceUrl, radar);
    }

    excluir(ids: number[]): Observable<any> {
        return this.http.delete(this.serviceUrl + "/" + ids);
    }

    obterPorId(id: number): Observable<any> {
        return this.http.get(`${this.serviceUrl}/${id}`);
    }

    converterItemFromServer(json: any): Pergunta {
        const radar: Pergunta = Object.assign(new Pergunta(), json);
        return radar;
    }

    obterTodos(): Observable<any> {
        return this.http.get(this.serviceUrl + '/listar/');
    }
}
