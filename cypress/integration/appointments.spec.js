describe("Appointment", () => {
    beforeEach(() => {
        cy.request("GET", "/api/debug/reset");
        cy.visit("/");
        cy.contains("Monday");
    });

    it("Should book an interview", () => {
        cy.get("[alt=Add]")
            .first()
            .click();

        cy.get("[data-testid=student-name-input]").type("Irina Ovsyannikova")
        cy.get("[alt='Polina Pozdnyakova']").click();

        cy.contains("Save").click();

        cy.contains(".appointment__card--show", "Irina Ovsyannikova");
        cy.contains(".appointment__card--show", "Polina Pozdnyakova");
    });

    it("Should edit an interview", () => {
        cy.get("[alt=Edit]")
            .first()
            .click({ force: true });

        cy.get("[data-testid=student-name-input]")
            .clear()
            .type("Lydia")

        cy.get("[alt='Polina Burneiko']").click();

        cy.contains("Save").click();

        cy.contains(".appointment__card--show", "Lydia");
        cy.contains(".appointment__card--show", "Polina Burneiko");
    });

    it("Should cancel interview", () => {
        cy.get("[alt=Delete]")
            .first()
            .click({ force: true });

        cy.contains("Confirm").click();

        cy.contains("Deleting");
        cy.contains("Deleting").should("not.exist")
        cy.contains(".appointment__card--show", "Archie Cohen")
            .should("not.exist");
    })
})