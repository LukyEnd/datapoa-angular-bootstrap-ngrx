/// <reference types="cypress" />

describe('Loading Page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o'
    ).as('busLine');
    cy.visit('/bus');
  });

  it('Service do Ônibus', () => {
    cy.wait('@busLine');
  });
});
