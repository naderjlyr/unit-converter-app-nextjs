describe("Converter Page E2E Tests", () => {
  before(() => {
    cy.visit("/converter");
  });

  it("loads the converter page and displays the converter form", () => {
    cy.get(".converter-form").should("exist");
    cy.contains("cFlox Converter").should("be.visible");
    cy.get("form").should("exist");
  });

  describe("Number Converters Tests", () => {
    before(() => {
      cy.contains("Number Converters").click();
    });

    it("allows the user to select Decimal to Roman and convert a value", () => {
      cy.contains("Decimal to Roman").click();
      cy.get("[data-cy=test-input-value]").clear().type("100");
      cy.get("[data-cy=test-output-value]").should("have.value", "C");
    });

    it("displays a loading state during Decimal to Roman conversion", () => {
      cy.contains("Decimal to Roman").click();
      cy.get("[data-cy=test-input-value]")
        .should("not.be.disabled")
        .clear()
        .type("100", { delay: 1200 });
      cy.waitForSpinner();
      cy.get("[data-cy=test-output-value]").should("have.value", "C");
    });

    it("shows an error message for invalid Decimal to Roman input", () => {
      cy.contains("Decimal to Roman").click();
      cy.get("[data-cy=test-input-value]").clear().type("invalid");
      cy.contains("Input must be a non-negative integer").should("be.visible");
    });

    it("displays a loading state during Binary to Roman conversion", () => {
      cy.contains("Binary to Roman").click();
      cy.get("[data-cy=test-input-value]")
        .clear()
        .type("1010", { delay: 1200 });
      cy.waitForSpinner();
      cy.get("[data-cy=test-output-value]").should("have.value", "X");
    });
  });

  describe("Unit Converters Tests", () => {
    before(() => {
      cy.contains("Unit Converters").click();
    });

    it("displays a loading state during Kilogram to Pound conversion", () => {
      cy.contains("Kilogram to Pound").click();
      cy.get("[data-cy=test-input-value]").clear().type("10", { delay: 1200 });
      cy.waitForSpinner();
      cy.get("[data-cy=test-output-value]").should("have.value", "22.05");
    });

    it("converts centimeter to inch correctly and shows an error for invalid input", () => {
      cy.contains("Centimeter to Inch").click();
      cy.get("[data-cy=test-input-value]").clear().type("100");
      cy.get("[data-cy=test-output-value]").should("have.value", "39.37");
      cy.get("[data-cy=test-input-value]").clear().type("-10", { delay: 1200 });
      cy.contains("Input must be a non-negative number").should("be.visible");
    });
  });
});
