import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProvaRealizadaService {
  private serviceUrl: string = environment.apiServiceUrl + "/prova-realizada";

  constructor(private http: HttpClient) { }

  public obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.serviceUrl}/${id}`);
  }

  public obterTodos(): Observable<any> {
    return this.http.get(this.serviceUrl + '/listar/');
  }
}
