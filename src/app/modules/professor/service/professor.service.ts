import { Professor } from '../model/professor.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProfessorService {

    serviceUrl = "/professor" //environment.apiServiceUrl + "/professor";

    constructor(private http: HttpClient) { }

    salvar(radar: Professor): Observable<any> {
        return this.http.post(this.serviceUrl, radar);
    }

    excluir(ids: number[]): Observable<any> {
        return this.http.delete(this.serviceUrl + "/" + ids);
    }

    obterPorId(id: number): Observable<any> {
        return this.http.get(`${this.serviceUrl}/${id}`);
    }

    converterItemFromServer(json: any): Professor {
        const radar: Professor = Object.assign(new Professor(), json);
        return radar;
    }

    obterTodos(): Observable<any> {
        return this.http.get(this.serviceUrl + '/listar/');
    }
}
