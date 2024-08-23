describe("Dashboard", () => {
  it("Dashboard", () => {
    cy.get('div[class="col-md-3 dashboard_status_boxe"]').should(
      "have.length",
      13
    );
    cy.xpath(`//*[text()="Today's Jobs"]`).click();
    cy.wait(2000);
    cy.get(".font_weight_400 > span").should("contain", "Today's Jobs");
    cy.xpath(`//*[text()="All Jobs"]`).click();
    cy.wait(2000);

    cy.get(".font_weight_400 > span").should("contain", "All Jobs");
    cy.xpath(`//*[text()="Requested Jobs"]`).click();
    cy.wait(2000);

    cy.get(".font_weight_400 > span").should("contain", "Requested Jobs");

    cy.xpath(`//*[text()="Unscheduled Jobs"]`).click();
    cy.wait(2000);

    cy.get(".font_weight_400 > span").should("contain", "Unscheduled Jobs");
    cy.xpath(`//*[text()="Cancelled Jobs"]`).click();
    cy.wait(2000);

    cy.get(".font_weight_400 > span").should("contain", "Cancelled Jobs");

    cy.xpath(`//*[text()="Not Ready To Bill Jobs"]`).click();
    cy.wait(2000);

    cy.get(".font_weight_400 > span").should(
      "contain",
      "Not Ready To Bill Jobs"
    );

    cy.get(":nth-child(10) > h6 > small").click();
    cy.wait(2000);

    cy.get(".font_weight_400 > span").should(
      "contain",
      "Completed Not Ready To Bill Jobs"
    );
    cy.wait(2000);

    cy.get(":nth-child(11) > h6 > small").click();
    cy.get(".font_weight_400 > span").should(
      "contain",
      "Completed Ready To Bill Jobs"
    );
    cy.wait(2000);

    cy.get(":nth-child(12) > h6 > small").click();
    cy.get(".font_weight_400 > span").should(
      "contain",
      "Jobs With Missing POs"
    );
    cy.wait(2000);

    cy.get(":nth-child(13) > h6 > small").click();

    cy.wait(2000);
    cy.get(".font_weight_400 > span").should("contain", "Overdue Jobs");
    cy.wait(2000);
  });
});
