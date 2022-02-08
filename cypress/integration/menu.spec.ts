/// <reference types="cypress" />

describe('Data BusLine and MiniBus', () => {
  it('Botão Pagina Lotação', () => {
    cy.visit('/bus');
    cy.contains('DataPoa Rotas').should('to.have.length', 1);
    cy.wait(1000);
    cy.get('.btnMenuMiniBus').contains('Lotação').click();
    cy.url().should('include', 'minibus');
    cy.wait(1000);
  });

  it('Botão Pagina Ônibus', () => {
    cy.visit('/minibus');
    cy.contains('DataPoa Rotas').should('to.have.length', 1);
    cy.wait(1000);
    cy.get('.btnMenuBus').contains('Ônibus').click();
    cy.url().should('include', 'bus');
    cy.wait(1000);
  });
});
