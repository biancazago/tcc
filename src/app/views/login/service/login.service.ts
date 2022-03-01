import { Login } from '../model/login.model';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class AlunoService {

    serviceUrl = "/login" //environment.apiServiceUrl + "/login";

    constructor(private http: HttpClient) { }

    logar(login: Login): Observable<any> {
        return this.http.post(this.serviceUrl, login);
    }

}
