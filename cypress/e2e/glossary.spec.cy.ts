describe("Glossary Component Tests", () => {
  before(() => {
    cy.visit("/converter");
  });

  it("loads the Glossary component and displays the correct header", () => {
    cy.get("[data-cy=glossary-container]").should("exist");
    cy.get("[data-cy=glossary-header]")
      .contains("Roman Numerals Glossary")
      .should("be.visible");
  });

  it("displays the correct introductory text", () => {
    cy.get("[data-cy=glossary-intro-text]").should(
      "contain",
      "Roman numerals use different symbols for each power of ten"
    );
  });
});
