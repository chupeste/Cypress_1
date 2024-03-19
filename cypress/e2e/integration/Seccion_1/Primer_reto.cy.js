/// <reference types="Cypress" />  
// para que funcionen los comandos 
require('cypress-plugin-tab')
describe("Primer reto ", () =>{

    it(" ",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()

        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-input').should("be.visible").type("admin")
        cy.wait(1500)
        cy.get(':nth-child(2) > .oxd-input').should("be.visible").clear()

        //agregando campo
        cy.get('.orangehrm-header-container > .oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type("Admin")
        cy.get('.oxd-autocomplete-text-input > input').type("Cesar Ramos Morales")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Chupeste").tab().type("Cesar1501").tab().type("Cesar1501")
        
        cy.get('.oxd-button--ghost').should("be.visible").click()

        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').should("be.visible").click()
        cy.get('.oxd-autocomplete-text-input > input').clear().type("Cesar Ramos Morales")
        cy.get(':nth-child(2) > .oxd-input').type("Chupeste")
        cy.get('.oxd-button--ghost').should("be.visible").click()

        //borrando el campo
        cy.wait(1500)
        cy.get(':nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
        cy.get('.oxd-button--label-danger').click()



    })


  })  