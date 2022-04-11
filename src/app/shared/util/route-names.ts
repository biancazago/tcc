export enum RouteNames {
  LOGIN = 'login',
  PROVA = 'prova',
  PERGUNTA = 'pergunta',
  PROFESSOR = 'professor',
  AREA = 'area',
  ALUNO = 'aluno',
  REALIZAR_PROVA = 'realizar-prova',
  PROVA_REALIZADA = 'prova-realizada'
}

export class RouteUtils {
  public static readonly ROTA_ATUAL_PARENT = 0;
  public static readonly ROTA_ATUAL_EXATA = 1;
  public static readonly ROTA_ATUAL_CONTEM = 1;

  public static formarRota(rotas: string[], raiz: boolean, removerBarraFinal: boolean = false): string {
    return removerBarraFinal ? RouteUtils.removerBarraFinal(RouteUtils.formarRotaImpl(rotas, raiz)) : RouteUtils.formarRotaImpl(rotas, raiz);
  }

  private static removerBarraFinal(caminho: string): string {
    if (caminho.endsWith('/')) {
      return caminho.substring(0, caminho.length - 1);
    }
    return caminho;
  }

  private static formarRotaImpl(rotas: string[], raiz: boolean): string {
    return raiz ? '/' + rotas.join('/') : rotas.join('/');
  }

  public static isRotaAtualParent(routerURL: string, rotaConferir: string): boolean {
    return RouteUtils.removerBarraInicial(rotaConferir) === RouteUtils.removerBarraInicial(routerURL).split('/')[0];
  }

  public static isRotaAtualExata(routerURL: string, rotaConferir: string): boolean {
    return RouteUtils.removerBarraInicial(rotaConferir) === RouteUtils.removerBarraInicial(routerURL);
  }

  public static isRotaAtualContida(routerURL: string, rotaConferir: string): boolean {
    RouteUtils.removerBarraInicial(routerURL).split('/').filter(parte => {
      if (parte === RouteUtils.removerBarraInicial(rotaConferir)) {
        return true;
      }
    });
    return false || (routerURL.indexOf(rotaConferir) > -1);
  }

  private static removerBarraInicial(url: string): string {
    return (url[0] === '/') ? url.slice(1) : url;
  }
}
