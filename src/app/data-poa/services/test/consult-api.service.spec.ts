import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ConsultApiService } from '../consult-api.service';

describe('ConsultApiService', () => {
  let service: ConsultApiService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConsultApiService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Chamar o Get com o endpoint Correto Para Bus', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.apiBusLine('bus');
    expect(spy).toHaveBeenCalledWith(`${environment.urlBus}o`);
  });

  it('Chamar o Get com o endpoint Correto Para miniBus', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.apiBusLine('miniBus');
    expect(spy).toHaveBeenCalledWith(`${environment.urlBus}l`);
  });

  it('Chamar o Get com o endpoint Correto Para Itinerary Bus', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.setItinerary(5000);
    expect(spy).toHaveBeenCalledWith(`${environment.urlItinerary}5000`);
  });

  it('Chamar o Get com o endpoint Correto Para Itinerary MiniBus', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.setItinerary(1);
    expect(spy).toHaveBeenCalledWith(`${environment.urlItinerary}1`);
  });
});

//anotações para estudar

/*
Ao importar o HttpClientTestingModule, pegamos um MOCK do meu httpClient do Service Original. Sendo assim, consigo
injetar ela em uma variavel a qual utilizarei no test inteiro. Sendo possivel acessar funções do Service

.toBeTruthy() espera que a variavel declarada antes, seja verdadeira, ou seja, que esteja Definida

spyOn -> Neste caso, precisamos ver se o metodo da classe foi chamada, para isto, usaremos o espião Para Espionar
o metodo HTTP. Ele sempre espera 2 metodos (variavel, 'formato dela')

toHaveBeenCalled -> Garantir que o spy tenha sido Chamado
toHaveBeenCalledWith -> Aqui determinamos com este ...With no final que a chamada tem que ser igual
ao que ta dentro do parenteses. Este serve para VALIDAR o EndPoint

.and.callThrough() -> chamar o metodo E nao fazer NADA. Chamar ele Normalmente. Executar naturalmente

fixture.detectChanges() -> caso algum componente mude, sera atualizado tbm no Dom Virtual

*/
