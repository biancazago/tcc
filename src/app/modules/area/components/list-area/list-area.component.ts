import { Component, OnInit } from '@angular/core';
import { AreaModel } from '../../model/area.model';
import { Page } from '../../../../models/page';
import { ColunaModel } from 'src/app/shared/models/coluna.model';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AreaService } from '../../service/area.service';
import { MessageService } from 'primeng';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.sass']
})
export class ListAreaComponent implements OnInit {
  public areas: AreaModel[] = [];
  public pagina: Page<AreaModel> = new Page();
  public colunas: ColunaModel[] = [
    new ColunaModel('id', 'ID', '64px'),
    new ColunaModel('nome', 'Nome', '150px'),
    new ColunaModel('descricao', 'Descrição', 'auto'),
  ];
  public areaEditada: AreaModel;
  public mostrarModal: boolean = false;
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private areaService: AreaService,
    private messageService: MessageService
  ) { }

  public ngOnInit(): void {
    this.buscarAreas();
  }

  public preencherTabela(evento: Record<string, any>): void {
    this.pagina = Page.paginar(this.areas, Page.paginaPorIndice(evento.first));
  }

  public excluir(id: number) {
    PrimengUtil.operarBlockUI(this.blockUI, this.areaService.mock.excluir([id])).subscribe(() => {
      PrimengUtil.mensagemSucesso(this.messageService, MensagemUtil.SUCESSO_EXCLUSAO, '')
      this.buscarAreas();
    });
  }

  public editar(id: number) {
    this.areaEditada = this.areas.find((areaProcurada: AreaModel) => areaProcurada.id === id);
    this.mostrarModal = true;
  }

  public finalizarAlteracao(area: AreaModel): void {
    if(area) {
      PrimengUtil.operarBlockUI(this.blockUI, this.areaService.mock.salvar(area)).subscribe(() => {
        this.buscarAreas();
      });
    }
    this.areaEditada = null;
    this.mostrarModal = false;
  }

  private buscarAreas(): void {
    PrimengUtil.operarBlockUI(this.blockUI, this.areaService.mock.obterTodos()).subscribe((areas: AreaModel[]) => {
      this.areas = areas;
      this.pagina = Page.paginar(this.areas, 1);
    });
  }
}
