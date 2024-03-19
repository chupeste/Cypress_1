/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')

describe("Nueva selección checkbox ", () =>{

    it("Check box ",() =>{
        cy.visit("https://formstone.it/components/checkbox/")
        cy.title().should("eq","Checkbox · Formstone")
        cy.wait(1500)

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    
    })
    
    it("Check box por seleccion",() =>{
        cy.visit("https://formstone.it/components/checkbox/")
        cy.title().should("eq","Checkbox · Formstone")
        cy.wait(1500)

        cy.get(':nth-child(1) > .form > :nth-child(2) > .fs-checkbox > .fs-checkbox-marker > .fs-checkbox-flag').click()
        //cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    
    })

    it.only("Check box por seleccion",() =>{
        cy.visit("http://test.rubywatir.com/radios.php")
        cy.title().should("eq","Radio button test Page")
        cy.wait(1500)

        //cy.get('#radioId').check()
        cy.get('#radioId').click()

    })


    


  }) //Cierre de describe