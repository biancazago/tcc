import { NgBlockUI } from "ng-block-ui";
import { MenuItem, Message, MessageService, SelectItem } from "primeng";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

export class PrimengUtil {
  public static SEVERIDADE_SUCESSO: string = 'success';
  public static SEVERIDADE_ERRO: string = 'error';
  public static SEVERIDADE_INFORMACAO: string = 'info';
  public static SEVERIDADE_AVISO: string = 'warn';

  public static criarMenuItem(label, routerLink, icon): MenuItem {
    return {
      icon: icon,
      routerLink: routerLink,
      label: label
    };
  }

  public static criarMessage(severity: string, summary: string, detail?: string, ): Message {
    return {
      summary: summary,
      detail: detail,
      severity: severity
    };
  }

  public static criarSelectItem<T>(label: string, value: T, icon?: string): SelectItem {
    return {
      label: label,
      value: value,
      icon: icon
    };
  }

  public static converterParaSelectItem(objeto: Record<string, any>, campoLabel: string, campoValue?: string): SelectItem {
    return this.criarSelectItem(objeto[campoLabel], campoValue ? objeto[campoValue] : objeto);
  }

  public static converterVetorParaSelectItem(objetos: Record<string, any>[], campoLabel: string, campoValue?: string): SelectItem[] {
    return objetos.map((objeto: Record<string, any>) => this.converterParaSelectItem(objeto, campoLabel, campoValue));
  }

  public static mensagemSucesso(messageService: MessageService, titulo: string, detalhes: string): void {
    this.adicionarMensagem(messageService, this.criarMessage(this.SEVERIDADE_SUCESSO, titulo, detalhes));
  }

  public static mensagemErro(messageService: MessageService, titulo: string, detalhes: string): void {
    this.adicionarMensagem(messageService, this.criarMessage(this.SEVERIDADE_ERRO, titulo, detalhes));
  }

  public static mensagemInformacao(messageService: MessageService, titulo: string, detalhes: string): void {
    this.adicionarMensagem(messageService, this.criarMessage(this.SEVERIDADE_INFORMACAO, titulo, detalhes));
  }

  public static mensagemAviso(messageService: MessageService, titulo: string, detalhes: string): void {
    this.adicionarMensagem(messageService, this.criarMessage(this.SEVERIDADE_AVISO, titulo, detalhes));
  }

  public static adicionarMensagem(messageService: MessageService, message: Message): void {
    messageService.add(message);
  }

  public static operarBlockUI<T>(blockUI: NgBlockUI, observable: Observable<T>): Observable<T> {
    blockUI.start();
    return observable.pipe(finalize(() => blockUI.stop()));
  }
}
