

/// <reference types="Cypress" />  
 

describe("ejemplo de Type pageUp, pageDown ", () =>{

    it("Type pageUp ",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(3000)

        cy.get("userName").type('{pageup}')
        cy.wait(2000)

    })

    it("Type pageDawn ",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(3000)

        cy.get("userName").type('{pageDown}')
        cy.wait(2000)

    })


  }) //Cierre de describe