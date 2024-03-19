/// <reference types="Cypress" />  

describe("Introduccion de los Assert", () => {

    it("Demo de los Assert", () => {
        cy.visit("https://demoqa.com/automation-practice-form")

        // Verifica que el título de la página sea "DEMOQA"
        cy.title().should('eq', 'ToolsQA')

        cy.wait(3000)

        // Introduce el primer nombre
        cy.get("#firstName").should("be.visible").type("Cesar")

        // Introduce el apellido
        cy.get('#lastName').should("be.visible").type("Cesar")

        // Introduce el correo electrónico
        cy.get('#userEmail')
            .should("be.visible")
            .and("be.enabled")
            .type("cesar@gmail.com")
    })
})