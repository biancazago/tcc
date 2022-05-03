import { Component, OnInit } from "@angular/core";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { MessageService } from "primeng";
import { Page } from "src/app/models/page";
import { ColunaModel } from "src/app/shared/models/coluna.model";
import { MensagemUtil } from "src/app/shared/util/mensagem.util";
import { PrimengUtil } from "src/app/shared/util/primeng.util";
import { PerguntaModel } from "../../model/pergunta.model";
import { PerguntaService } from "../../service/pergunta.service";

@Component({
  selector: 'app-list-pergunta',
  templateUrl: './list-pergunta.component.html',
  styleUrls: ['./list-pergunta.component.sass']
})
export class ListPerguntaComponent implements OnInit {
  public perguntas: PerguntaModel[] = [];
  public pagina: Page<PerguntaModel> = new Page();
  public colunas: ColunaModel[] = [
    new ColunaModel('id', 'ID', '64px'),
    new ColunaModel('descricao', 'Descrição', 'auto'),
  ];
  public perguntaEditada: PerguntaModel;
  public mostrarModal: boolean = false;
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private perguntaService: PerguntaService,
    private messageService: MessageService
  ) { }

  public ngOnInit(): void {
    this.buscarPerguntas();
  }

  public preencherTabela(evento: Record<string, any>): void {
    this.pagina = Page.paginar(this.perguntas, Page.paginaPorIndice(evento.first));
  }

  public excluir(id: number) {
    PrimengUtil.operarBlockUI(this.blockUI, this.perguntaService.mock.excluir([id])).subscribe(() => {
      PrimengUtil.mensagemSucesso(this.messageService, MensagemUtil.SUCESSO_EXCLUSAO, '')
      this.buscarPerguntas();
    });
  }

  public editar(id: number) {
    this.perguntaEditada = this.perguntas.find((perguntaProcurada: PerguntaModel) => perguntaProcurada.id === id);
    this.mostrarModal = true;
  }

  public finalizarAlteracao(pergunta: PerguntaModel): void {
    if(pergunta) {
      PrimengUtil.operarBlockUI(this.blockUI, this.perguntaService.mock.salvar(pergunta)).subscribe(() => {
        this.buscarPerguntas();
      });
    }
    this.perguntaEditada = null;
    this.mostrarModal = false;
  }

  private buscarPerguntas(): void {
    PrimengUtil.operarBlockUI(this.blockUI, this.perguntaService.mock.obterTodos()).subscribe((perguntas: PerguntaModel[]) => {
      this.perguntas = perguntas;
      this.pagina = Page.paginar(this.perguntas, 1);
    });
  }
}
