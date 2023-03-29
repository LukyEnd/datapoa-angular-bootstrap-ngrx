import { HttpErrorResponse } from '@angular/common/http';

export class ErrorBuilder {
  static genericError(error: HttpErrorResponse): string {
    var message =
      'Desculpe o Transtorno!! Retorne para uma das alternativas Abaixo.';
    switch (error.status) {
      case 400:
        let error400 = `Erro genérico Mensagem do Erro: ${error.message}.`;
        return error400 + message;
      case 401:
        let error401 = `Página restrita, sem credencial válida para acessá-la. Mensagem do Erro: ${error.message}.`;
        return error401 + message;
      case 403:
        let error403 = `Navegador não tem permissão para acessar a página. Mensagem do Erro: ${error.message}.`;
        return error403 + message;
      case 404:
        let error404 = `URL digitada, não existe. Mensagem do Erro: ${error.message}.`;
        return error404 + message;
      case 500:
        let error500 = `Falha interna do servidor. Mensagem do Erro: ${error.message}.`;
        return error500 + message;
      default:
        let errorDetail = `Erro Desconhecido. Mensagem do Erro: ${error.message}.`;
        return errorDetail;
    }
  }
}
