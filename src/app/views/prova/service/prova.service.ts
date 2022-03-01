import { Prova } from './../model/prova.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProvaService {

    serviceUrl = "/prova" //environment.apiServiceUrl + "/prova";

    constructor(private http: HttpClient) { }

    salvar(radar: Prova): Observable<any> {
        return this.http.post(this.serviceUrl, radar);
    }

    excluir(ids: number[]): Observable<any> {
        return this.http.delete(this.serviceUrl + "/" + ids);
    }

    obterPorId(id: number): Observable<any> {
        return this.http.get(`${this.serviceUrl}/${id}`);
    }

    converterItemFromServer(json: any): Prova {
        const radar: Prova = Object.assign(new Prova(), json);
        return radar;
    }

    obterTodos(): Observable<any> {
        return this.http.get(this.serviceUrl + '/listar/');
    }
}
