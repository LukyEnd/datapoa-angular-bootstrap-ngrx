import { HttpErrorResponse } from '@angular/common/http';

export class ErrorBuilder {
  static genericError(error: HttpErrorResponse): string {
    var message =
      ' Desculpe o Transtorno!! Retorne para uma das alternativas Abaixo.';
    switch (error.status) {
      case 200:
        let erro200 = `Está Tudo Ok, mas aconteceu algum erro com a URL de acesso. Mensagem do Erro: ${error.message}.`;
        return erro200 + message;
      case 400:
        let erro400 = `Erro genérico Mensagem do Erro: ${error.message}.`;
        return erro400 + message;
      case 401:
        let erro401 = `Página restrita, sem credencial válida para acessá-la. Mensagem do Erro: ${error.message}.`;
        return erro401 + message;
      case 403:
        let erro403 = `Navegador não tem permissão para acessar a página. Mensagem do Erro: ${error.message}.`;
        return erro403 + message;
      case 404:
        let erro404 = `URL digitada, não existe. Mensagem do Erro: ${error.message}.`;
        return erro404 + message;
      case 500:
        let erro500 = `Falha interna do servidor. Mensagem do Erro: ${error.message}.`;
        return erro500 + message;
      default:
        let erroDetail = `Erro Desconhecido. Mensagem do Erro: ${error.message}.`;
        return erroDetail;
    }
  }
}
