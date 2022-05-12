import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProvaModel } from '../model/prova.model';

@Injectable()
export class ProvaService {

    serviceUrl = "/prova" //environment.apiServiceUrl + "/prova";

    constructor(private http: HttpClient) { }

    salvar(radar: ProvaModel): Observable<any> {
        return this.http.post(this.serviceUrl, radar);
    }

    excluir(ids: number[]): Observable<any> {
        return this.http.delete(this.serviceUrl + "/" + ids);
    }

    obterPorId(id: number): Observable<any> {
        return this.http.get(`${this.serviceUrl}/${id}`);
    }

    converterItemFromServer(json: any): ProvaModel {
        const radar: ProvaModel = Object.assign(new ProvaModel(), json);
        return radar;
    }

    obterTodos(): Observable<any> {
        return this.http.get(this.serviceUrl + '/listar/');
    }
}
