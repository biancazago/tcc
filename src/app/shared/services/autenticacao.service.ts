import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private usuarioLogado: Usuario;

  public estaAutenticado(): boolean {
    return !!this.usuarioLogado;
  }
}
