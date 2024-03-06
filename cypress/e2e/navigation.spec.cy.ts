describe("Navigation Component Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("confirms that the navigation bar is visible", () => {
    cy.get("nav").should("be.visible");
  });

  it("confirms the presence of correct navigation links", () => {
    cy.get("[data-cy=nav-link-home]").should("contain", "Home");
    cy.get("[data-cy=nav-link-converters]").should("contain", "Converters");
    cy.get("[data-cy=nav-link-about]").should("contain", "About");
  });

  it("navigates to the Converters page and confirms the URL", () => {
    cy.get("[data-cy=nav-link-converters]").click();
    cy.url().should("include", "/converter");
  });

  it("navigates to the About page and confirms the URL", () => {
    cy.get("[data-cy=nav-link-about]").click();
    cy.url().should("include", "/about");
  });
});
