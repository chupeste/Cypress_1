/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("ejemplo de funcion Tab", () =>{

    it("Type con tab ",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(3000)

        cy.get("#firstName").type("Cesar").tab().type("Ramos").tab().type("cesaram15@gmail.com")
    })


  })