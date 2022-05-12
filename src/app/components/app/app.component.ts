import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { RouteNames, RouteUtils } from 'src/app/shared/util/route-names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public exibirMenu: boolean = true;
  public opcoesMenuLateral: MenuItem[] = [
    PrimengUtil.criarMenuItem('Aluno', RouteUtils.formarRota([RouteNames.ALUNOS], true), 'pi pi-user'),
    PrimengUtil.criarMenuItem('Professor', RouteUtils.formarRota([RouteNames.PROFESSORES], true), 'pi pi-id-card'),
    PrimengUtil.criarMenuItem('Pergunta', RouteUtils.formarRota([RouteNames.PERGUNTAS], true), 'pi pi-question-circle'),
    PrimengUtil.criarMenuItem('Prova', RouteUtils.formarRota([RouteNames.PROVAS], true), 'pi pi-copy'),
    PrimengUtil.criarMenuItem('Área', RouteUtils.formarRota([RouteNames.AREAS], true), 'pi pi-sitemap'),
    PrimengUtil.criarMenuItem('Realizar Prova', RouteUtils.formarRota([RouteNames.REALIZAR_PROVA], true), 'pi pi-pencil'),
    PrimengUtil.criarMenuItem('Prova Realizada', RouteUtils.formarRota([RouteNames.PROVAS_REALIZADAS], true), 'pi pi-check'),
  ];

  constructor(private autenticacaoService: AutenticacaoService) {}

  public estaUsuarioLogado(): boolean {
    return this.autenticacaoService.estaAutenticado();
  }
}
