/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to click field by field if
     * @example cy.clickField('btnContinue')
     */
    clickField(fieldId: string): Chainable<Subject>;
  }
}