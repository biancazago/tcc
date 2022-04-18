import { Observable, Subject } from "rxjs";
import { FuncoesUtil } from "src/app/shared/util/funcoes.util";

export class ResponseUtil {
  public static responder<T>(resposta?: T, erro?: Record<string, any>): Observable<T> {
    let assunto: Subject<T> = new Subject();
    window.setTimeout(
      () => this.finalizarResposta(assunto, resposta, erro),
      this.simularTempoRespostaSegundos(1000)
    );
    return assunto.asObservable();
  }

  private static simularTempoRespostaSegundos(multiplicador: number = 1): number {
    return ((Math.random() * 10) % 2) * multiplicador;
  }

  private static finalizarResposta<T>(assunto: Subject<T>, resposta?: T, erro?: Record<string, any>): void {
    if(erro) {
      assunto.error(erro);
      return;
    }
    assunto.next(!!resposta ? FuncoesUtil.clonarObjetoProfundamente(resposta) : resposta);
    assunto.complete();
  }
}
