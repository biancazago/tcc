import { Component, OnInit } from '@angular/core';
import { ProfessorModel } from '../../model/professor.model';
import { Page } from '../../../../models/page';
import { ColunaModel } from 'src/app/shared/models/coluna.model';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ProfessorService } from '../../service/professor.service';
import { MessageService } from 'primeng';
import { PrimengUtil } from 'src/app/shared/util/primeng.util';
import { MensagemUtil } from 'src/app/shared/util/mensagem.util';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.sass']
})
export class ListProfessorComponent implements OnInit {
  public professores: ProfessorModel[];
  public pagina: Page<ProfessorModel> = new Page();
  public colunas: ColunaModel[] = [
    new ColunaModel('id', 'ID', '64px'),
    new ColunaModel('nome', 'Nome', '200px'),
    new ColunaModel('email', 'E-mail', 'auto'),
  ];
  public professorEditado: ProfessorModel;
  public mostrarModal: boolean = false;
  @BlockUI() private blockUI: NgBlockUI;

  constructor(
    private professorService: ProfessorService,
    private messageService: MessageService
  ) { }

  public ngOnInit(): void {
    this.buscarProfessores();
  }

  public preencherTabela(evento: Record<string, any>): void {
    this.pagina = Page.paginar(this.professores, Page.paginaPorIndice(evento.first));
  }

  public excluir(id: number) {
    PrimengUtil.operarBlockUI(this.blockUI, this.professorService.mock.excluir([id])).subscribe(() => {
      PrimengUtil.mensagemSucesso(this.messageService, MensagemUtil.SUCESSO_EXCLUSAO, '')
      this.buscarProfessores();
    });
  }

  public editar(id: number) {
    this.professorEditado = this.professores.find((professorProcurado: ProfessorModel) => professorProcurado.id === id);
    this.mostrarModal = true;
  }

  public finalizarAlteracao(professor: ProfessorModel): void {
    if(professor) {
      PrimengUtil.operarBlockUI(this.blockUI, this.professorService.mock.salvar(professor)).subscribe(() => {
        this.buscarProfessores();
      });
    }
    this.professorEditado = null;
    this.mostrarModal = false;
  }

  private buscarProfessores(): void {
    PrimengUtil.operarBlockUI(this.blockUI, this.professorService.mock.obterTodos()).subscribe((professores: ProfessorModel[]) => {
      this.professores = professores;
      this.pagina = Page.paginar(this.professores, 1);
    })
  }
}
