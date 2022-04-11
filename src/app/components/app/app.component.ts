import { Component } from '@angular/core';
import { MenuItem } from 'primeng';
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
    PrimengUtil.criarMenuItem('Aluno', RouteUtils.formarRota([RouteNames.ALUNO], true), 'pi pi-user'),
    PrimengUtil.criarMenuItem('Professor', RouteUtils.formarRota([RouteNames.PROFESSOR], true), 'pi pi-id-card'),
    PrimengUtil.criarMenuItem('Pergunta', RouteUtils.formarRota([RouteNames.PERGUNTA], true), 'pi pi-question-circle'),
    PrimengUtil.criarMenuItem('Prova', RouteUtils.formarRota([RouteNames.PROVA], true), 'pi pi-copy'),
    PrimengUtil.criarMenuItem('Aluno', RouteUtils.formarRota([RouteNames.ALUNO], true), 'pi pi-user'),
    PrimengUtil.criarMenuItem('Aluno', RouteUtils.formarRota([RouteNames.ALUNO], true), 'pi pi-user'),
  ];
}
