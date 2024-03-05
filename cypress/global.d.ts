declare namespace Cypress {
  interface Chainable<Subject = any> {
    waitForSpinner(): Chainable<any>;
  }
}
