import { Aluno } from '../model/aluno.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class AlunoService {

    serviceUrl = "/aluno" //environment.apiServiceUrl + "/aluno";

    constructor(private http: HttpClient) { }

    salvar(radar: Aluno): Observable<any> {
        return this.http.post(this.serviceUrl, radar);
    }

    excluir(ids: number[]): Observable<any> {
        return this.http.delete(this.serviceUrl + "/" + ids);
    }

    obterPorId(id: number): Observable<any> {
        return this.http.get(`${this.serviceUrl}/${id}`);
    }

    converterItemFromServer(json: any): Aluno {
        const radar: Aluno = Object.assign(new Aluno(), json);
        return radar;
    }

    obterTodos(): Observable<any> {
        return this.http.get(this.serviceUrl + '/listar/');
    }
}
