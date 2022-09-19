/// <reference types="cypress" />

describe('Loading Page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l'
    ).as('miniBus');
    cy.visit('/minibus');
  });

  it('Service da Lotação', () => {
    cy.wait(1000);
    cy.wait('@miniBus');
    cy.wait(1000);
  });
});
