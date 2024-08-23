describe('SideBar', () => {
    it("Sidebar", () => {
        cy.get("button[class='btn btn-default toogle__Btn']").click();
        cy.get(".user-name").should("contain", "Services");
        cy.wait(2000);
        cy.get("a[href='/dashboard']").click();
      });
});
