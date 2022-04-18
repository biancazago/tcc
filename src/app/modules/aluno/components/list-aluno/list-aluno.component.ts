import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../../model/aluno.model';
import { Page } from '../../../../models/page';
import { ColunaModel } from 'src/app/shared/models/coluna.model';
import { AlunoService } from '../../service/aluno.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PrimengUtil } from '../../../../shared/util/primeng.util';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';
import { MessageService } from 'primeng';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.sass']
})
export class ListAlunoComponent implements OnInit {
  public alunos: AlunoModel[];
  public pagina: Page<AlunoModel> = new Page();
  public colunas: ColunaModel[] = [
    new ColunaModel('id', 'ID', '64px'),
    new ColunaModel('nome', 'Nome', '200px'),
    new ColunaModel('email', 'E-mail', 'auto'),
  ];
  public alunoEditado: AlunoModel;
  public mostrarModal: boolean = false;
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService
  ) { }

  public ngOnInit(): void {
    this.buscarAlunos();
  }

  public preencherTabela(evento: Record<string, any>): void {
    this.pagina = Page.paginar(this.alunos, Page.paginaPorIndice(evento.first));
  }

  public excluir(id: number) {
    PrimengUtil.operarBlockUI(this.blockUI, this.alunoService.mock.excluir([id])).subscribe(() => {
      PrimengUtil.mensagemSucesso(this.messageService, MensagemUtil.SUCESSO_EXCLUSAO, '')
      this.buscarAlunos();
    });
  }

  public editar(id: number) {
    this.alunoEditado = this.alunos.find((alunoProcurado: AlunoModel) => alunoProcurado.id === id);
    this.mostrarModal = true;
  }

  public finalizarAlteracao(aluno: AlunoModel): void {
    if(aluno) {
      PrimengUtil.operarBlockUI(this.blockUI, this.alunoService.mock.salvar(aluno)).subscribe(() => {
        this.buscarAlunos();
      });
    }
    this.alunoEditado = null;
    this.mostrarModal = false;
  }

  private buscarAlunos(): void {
    PrimengUtil.operarBlockUI(this.blockUI, this.alunoService.mock.obterTodos()).subscribe((alunos: AlunoModel[]) => {
      this.alunos = alunos;
      this.pagina = Page.paginar(this.alunos, 1);
    });
  }
}
