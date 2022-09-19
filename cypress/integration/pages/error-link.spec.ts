/// <reference types="cypress" />

describe('Data Error BusLine and MiniBus', () => {
  it('Erro na Pagina Ônibus', () => {
    cy.visit('/bus/testerror');
    cy.wait(1000);
  });

  it('Erro na Pagina Lotação', () => {
    cy.visit('/minibus/testerror');
    cy.wait(1000);
  });

  it('Erro na Pagina de Itinerary', () => {
    cy.visit('/itinerary/5000/testerror');
    cy.wait(1000);
  });

  it('Mudar de Tema', () => {
    cy.wait(1000);
    cy.get('.btnMenuTheme').contains('Tema Claro').click();
    cy.get('.btnMenuTheme').contains('Tema Escuro').click();
    cy.wait(1000);
  });
});
