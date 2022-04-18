import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { RouteNames, RouteUtils } from 'src/app/shared/util/route-names';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  @Input() opcoes: MenuItem[] = [
    PrimengUtil.criarMenuItem('Aluno', RouteUtils.formarRota([RouteNames.ALUNOS], true), 'pi pi-user')
  ];
}
