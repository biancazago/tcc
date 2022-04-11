import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng';
import * as _ from 'lodash';

@Component({
  selector: 'app-opcao-menu',
  templateUrl: './opcao-menu.component.html',
  styleUrls: ['./opcao-menu.component.scss']
})
export class OpcaoMenuComponent {
  @Input() opcao: MenuItem;
  public exibirSubMenu: boolean = false;

  public haSubOpcoes(subopcoes: MenuItem[]): boolean {
    return Array.isArray(subopcoes) && !_.isEmpty(subopcoes);
  }
}
