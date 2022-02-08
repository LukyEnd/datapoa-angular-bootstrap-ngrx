/// <reference types="cypress" />

describe('Data BusLine', () => {
  beforeEach(() => {
    cy.visit('/bus');
  });

  it('Titulo da Pagina Ônibus', () => {
    cy.url().should('include', 'bus');
    cy.contains('Linha de Ônibus').should('to.have.length', 1);
    cy.wait(1000);
  });

  it('Botão de Percorrer Tabela', () => {
    cy.get('.page-link').contains('Próximo').click();
    cy.get('.page-link').contains('Anterior').click();

    cy.get('.page-link').contains('5').click();
    cy.get('.page-link').contains('1').click();
  });

  it('Mudar de Tema', () => {
    cy.wait(1000);
    cy.get('.btnMenuTheme').contains('Tema Claro').click();
    cy.get('.btnMenuTheme').contains('Tema Escuro').click();
    cy.wait(1000);
  });

  it('Botão de Pesquisar na Tabela', () => {
    cy.wait(1000);
    cy.get('.form-control').type('futebol arena').click();
  });
});
