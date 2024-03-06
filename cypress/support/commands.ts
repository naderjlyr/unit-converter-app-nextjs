/// <reference types="cypress" />

Cypress.Commands.add("waitForSpinner", () => {
  cy.get("body").then(($body) => {
    if ($body.find(".form-spinner").length) {
      cy.get(".form-spinner").should("not.exist");
    }
  });
});
