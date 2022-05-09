import { Login } from '../model/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EsqueceuSenhaModel } from '../model/esqueceu-senha.model';
import { NovaSenhaModel } from '../model/nova-senha.model';

@Injectable()
export class LoginService {
  private serviceUrl: string = environment.apiServiceUrl + "/login";

  constructor(private http: HttpClient) { }

  public logar(login: Login): Observable<any> {
    return this.http.post(this.serviceUrl, login);
  }

  public pedirMudancaSenha(esqueceuSenhaModel: EsqueceuSenhaModel): Observable<any> {
    // TODO: remover
    let a = new Subject<void>();
    window.setTimeout(() => a.next(), 500);
    return a.asObservable();
    return this.http.post(this.serviceUrl + '/esqueceu-senha', esqueceuSenhaModel);
  }

  public mudarSenha(novaSenha: NovaSenhaModel): Observable<any> {
    // TODO: remover
    let a = new Subject<void>();
    window.setTimeout(() => a.next(), 500);
    return a.asObservable();
    return this.http.post(this.serviceUrl + '/nova-senha', novaSenha);
  }
}
