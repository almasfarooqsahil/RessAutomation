const { expect } = require("chai");
// const { assign } = require("cypress/types/lodash");
let URLget;
describe("Job & Invoice Section", () => {

  it("Jobs Section", () => {
    cy.visit("all-jobs?status=all&reload=1");
    cy.xpath('//*[text()="Add New"]').click();
    cy.wait(3000);
    cy.get(`input[placeholder="Select Community"]`)
      .click({ force: true })
      .type("AFS Tester{enter}");
    cy.wait(1400);

    cy.get('input[placeholder="Unit Size"]')
      .click({ force: true })
      .type("Studio{enter}");
    cy.wait(1400);

    cy.get('input[placeholder="Unit #"]').type("TestingUnit-1234");
    cy.get('input[placeholder="Start typing..."]').type(
      "JA Janitorial Additional cleaning"
    );
    cy.wait(1400);

    cy.xpath('//*[text()="JA Janitorial Additional cleaning"]').click();
    cy.get('input[placeholder="Start typing..."]').type("PT Accent wall");
    cy.wait(1000);

    cy.xpath('//*[text()="PT Accent wall"]').click();
    cy.wait(1000);
    cy.xpath(
      `//button[@class='btn btn_orange border_radius_5 font_14 text_uppercase font_weight_600'][normalize-space()='Save']`
    ).click();
    cy.xpath(`(//a[@id="dropdownMenuButton"])[1]`).click();
    cy.wait(1000);
    cy.get(`div[class='dropdown-menu show'] a:nth-child(1)`).click();
    cy.wait(1000);
    cy.get('select[placeholder="Select Assignee"]').select("Individual");
    cy.wait(1000);

    cy.xpath(`(//select[@aria-label='Department Id'])[2]`)
      .select(0)
      .invoke("val")
      .should("eq", "45");

    cy.wait(1000);
    cy.get('input[placeholder="Select date"]').click();
    cy.wait(1000);

    const currentDate = new Date();
    const currentDay = currentDate.getDate().toString().padStart(2, '0');
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    const currentYear = currentDate.getFullYear();
    const formattedCurrentDate = `${currentMonth}/${currentDay}/${currentYear}`;
    cy.get(`input[placeholder="Select date"]`).type(
      `${formattedCurrentDate}{enter}`
    );
    cy.wait(3000);
    cy.xpath('(//a[@id="dropdownMenuButton"])[1]').click({ force: true });
    cy.wait(3000);
    cy.xpath('//*[text()="Complete"]').click();
    cy.wait(3000);
    cy.get('textarea[placeholder="Job Notes"]').type("Testing NOTES");
    cy.wait(3000);
    const p = "5.jpg";
    cy.xpath(`(//input[@name="uploaded_file"])[3]`).attachFile(p);

    // cy.readFile('cypress/fixtures/5.jpg', 'base64').then(customVariableName => {
    //   {
    //   fileContent: customVariableName.toString(),
    //   fileName: '5.jpg',
    //   mimeType: 'image/jpeg',
    // })
    // cy.log(customVariableName)
    // });
    cy.wait(3000);
    // cy.xpath('(//div[@class="img__box"])[1]').should("be.visible");
    cy.wait(3000);
    cy.xpath(`(//input[@name="uploaded_file"])[4]`).attachFile(p);
    cy.wait(3000);
    // cy.xpath('(//div[@class="img__box"])[2]').should("be.visible");
    cy.get('input[placeholder="Select Job Start Time"]').type(
      `${currentMonth}-${currentDay}-${currentYear} 12:00 AM{enter}`
    );
    cy.wait(3000);

    cy.log(`${currentMonth}-${currentDay}-${currentYear} 12:10 PM`)
    cy.get('input[placeholder="Select Job End Time"]').type(
      `${currentMonth}-${currentDay}-${currentYear} 12:10 AM{enter}`
    );
    cy.wait(3000);
    cy.xpath(
      '(//button[@class="btn btn_blue border_radius_5 font_14 text_uppercase font_weight_600"])[5]'
    ).click();
    cy.wait(3000);
    cy.xpath('(//button[@class="btn btn_blue border_radius_5 font_14 text_uppercase font_weight_600"])[6]').click();
    cy.wait(3000);
    // First Job Complete

    // Second Job Assignment Start
    cy.xpath('(//a[@id="dropdownMenuButton"])[2]').click();
    cy.wait(1000);
    cy.get(`div[class='dropdown-menu show'] a:nth-child(1)`).click();
    cy.wait(1000);
    cy.get('select[placeholder="Select Assignee"]').select("Individual");
    cy.wait(1000);

    cy.xpath(`(//select[@aria-label='Department Id'])[2]`)
      .select(0)
      .invoke("val")
      .should("eq", "21");

    cy.wait(1000);
    cy.get('input[placeholder="Select date"]').click();
    cy.wait(1000);
    cy.get(`input[placeholder="Select date"]`).type(
      `${formattedCurrentDate}{enter}`
    );
    cy.wait(3000);
    cy.xpath('(//a[@id="dropdownMenuButton"])[2]').click({ force: true });
    cy.wait(3000);
    cy.xpath('//*[text()="Complete"]').click();
    cy.wait(3000);
    cy.get('textarea[placeholder="Job Notes"]').type("Testing NOTES");
    cy.wait(3000);
    const a = "4.jpg";
    cy.xpath(`(//input[@name="uploaded_file"])[3]`).attachFile(a);
    cy.wait(3000);
    // cy.xpath('(//div[@class="img__box"])[1]').should("be.visible");
    cy.wait(3000);
    cy.xpath(`(//input[@name="uploaded_file"])[4]`).attachFile(p);
    cy.wait(4000);
    // cy.xpath('(//div[@class="img__box"])[2]').should("be.visible");
    cy.get('input[placeholder="Select Job Start Time"]').type(
      `${currentMonth}-${currentDay}-${currentYear} 12:00 AM{enter}`
    );
    cy.wait(4000);
    cy.get('input[placeholder="Select Job End Time"]').type(
      `${currentMonth}-${currentDay}-${currentYear} 12:10 AM{enter}`
    );
    cy.wait(2400);
    cy.xpath(
      '(//button[@class="btn btn_blue border_radius_5 font_14 text_uppercase font_weight_600"])[5]'
    ).click();
    cy.wait(4000);
    cy.xpath(
      '(//button[@class="btn btn_blue border_radius_5 font_14 text_uppercase font_weight_600"])[6]'
    ).click();
    cy.wait(4000);
    cy.xpath('(//span[@class="box"])[1]').click();
    cy.wait(4000);
    cy.xpath(
      '(//button[@class="btn_big_medium btn btn_orange border_radius_5 font_14 text_uppercase font_weight_600 btn-block mg_bbot"])'
    )
      .should("have.text", "Generate Invoice")
      .click();

      cy.wait(4000);

    cy.url().then((url) => {
      URLget = url;
      cy.log(URLget);
    });
  });
  it('invoices Page', () => {
        cy.visit(URLget)
        cy.wait(3000);
        // cy.get('h1[class="h4 heading_text mr-4"]').should('contains','Invoice');
        cy.wait(3000);
        cy.xpath('(//button[@class="btn_big_medium btn btn_orange border_radius_5 font_22 font_weight_700 btn-block mg_bot_5"])[1]').click()
        cy.wait(3000);
        cy.xpath(`(//button[@class="btn btn_blue border_radius_5 font_14 text_uppercase font_weight_600"])[3]`).click();
        cy.wait(5000);
        cy.xpath(`(//input[@placeholder="Price"])[2]`).type('10');
        cy.wait(3000);
        cy.xpath(`(//button[@type="submit"])[1]`).click();
        cy.wait(5000);
        cy.xpath(`//*[text()="Collect Payment"]`).click();
        cy.wait(5000);
        cy.xpath(`(//select[@class="form-select"])[1]`).select("Cash");
        cy.wait(3000);
        cy.xpath(`(//button[@type="submit"])[3]`).click()
        cy.wait(5000);

    });
});
