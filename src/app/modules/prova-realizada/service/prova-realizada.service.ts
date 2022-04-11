import { ProvaRealizada } from '../model/prova-realizada.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProvaRealizadaService {

    serviceUrl = "/prova-realizada" //environment.apiServiceUrl + "/prova-realizada";

    constructor(private http: HttpClient) { }

    
    obterPorId(id: number): Observable<any> {
        return this.http.get(`${this.serviceUrl}/${id}`);
    }


    obterTodos(): Observable<any> {
        return this.http.get(this.serviceUrl + '/listar/');
    }
}
