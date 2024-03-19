/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe(" Alias en cypress", () => {

    it("Alias", () => {
        let t=2000
        cy.visit("https://testpages.eviltester.com/styled/reference/input.html")
        cy.title("eq","Input Elements - HTML Testing Reference")
        cy.wait(t)
        
        cy.get('#text-input').should("be.visible").as("nom")

        cy.get("@nom").type("Pedro")
        cy.get('#search-input').should("be.visible").as("ape")
        cy.get("@ape").type("Ramos")
    })
})