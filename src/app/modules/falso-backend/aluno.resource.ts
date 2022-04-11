import { Observable, Subject } from "rxjs";
import { FuncoesUtil } from "src/app/shared/util/funcoes.util";
import { AlunoModel } from "../aluno/model/aluno.model";

export class AlunoResource {
  private static sequenceID: number = 3;
  private static alunos: AlunoModel[] = [
    new AlunoModel(1, 'Bianca Zago', 'amo_Dogs!', 'bianca.dot.net@gmail.com'),
    new AlunoModel(2, 'Lívia Aurich', 'renanEhBurroBurroBurro!', 'livinha_no_ask_fm@yahoo.com'),
  ];

  public static obterTodos(assunto: Subject<AlunoModel[]>): Observable<AlunoModel[]> {
    window.setTimeout(
      () => assunto.next(FuncoesUtil.clonarObjetoProfundamente(this.alunos)),
      this.simularTempoRespostaSegundos(1000)
    );
    return assunto.asObservable();
  }

  private static simularTempoRespostaSegundos(multiplicador: number = 1): number {
    return ((Math.random() * 10) % 2) * multiplicador;
  }
}
