import { RealizarProvaModel } from '../model/realizar-prova.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class RealizarProvaService {

    serviceUrl = "/realizar-prova" //environment.apiServiceUrl + "/realizar-prova";

    constructor(private http: HttpClient) { }

    salvar(radar: RealizarProvaModel): Observable<any> {
        return this.http.post(this.serviceUrl, radar);
    }

    excluir(ids: number[]): Observable<any> {
        return this.http.delete(this.serviceUrl + "/" + ids);
    }

    obterPorId(id: number): Observable<any> {
        return this.http.get(`${this.serviceUrl}/${id}`);
    }

    converterItemFromServer(json: any): RealizarProvaModel {
        const radar: RealizarProvaModel = Object.assign(new RealizarProvaModel(), json);
        return radar;
    }

    obterTodos(): Observable<any> {
        return this.http.get(this.serviceUrl + '/listar/');
    }
}
