import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../../model/aluno.model';
import { Page } from '../../../../models/page';
import { ColunaModel } from 'src/app/shared/models/coluna.model';
import { AlunoService } from '../../service/aluno.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.sass']
})
export class ListAlunoComponent implements OnInit {
  public alunos: AlunoModel[]
  public pagina: Page<AlunoModel> = new Page();
  public colunas: ColunaModel[] = [
    new ColunaModel('id', 'ID', '64px'),
    new ColunaModel('nome', 'Nome', '200px'),
    new ColunaModel('email', 'E-mail', 'auto'),
  ];
  @BlockUI() private blockUI: NgBlockUI;

  constructor(private alunoService: AlunoService) { }

  public ngOnInit(): void {
    this.buscarAlunos();
  }

  public preencherTabela(evento: Record<string, any>): void {
    this.pagina = Page.paginar(this.alunos, Page.paginaPorIndice(evento.first));
  }

  public excluir(id: number) {

  }

  public visualizar(id: number) {

  }

  private buscarAlunos(): void {
    this.blockUI.start();
    this.alunoService.mockObterTodos().subscribe((alunos: AlunoModel[]) => {
      this.alunos = alunos;
      this.pagina = Page.paginar(this.alunos, 1);
    }, () => {}, () => this.blockUI.stop());
  }
}
