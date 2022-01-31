import { HttpErrorResponse } from '@angular/common/http';

export class ErrorBuilder {
  static genericError(error: HttpErrorResponse): string {
    // const errorMessage2 = error?.error?.errors[0]?.suggestedUserActions[0];
    // if (!!errorMessage2) {
    // return errorMessage2;
    // }
    return 'Tivemos um problema!! Retorne para uma das alternativas Abaixo. Caso nao consiga, entre em contato com o administrador do sistema.';
  }
}
