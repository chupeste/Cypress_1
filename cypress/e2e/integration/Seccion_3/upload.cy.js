/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe(" Assert", () => {

    it("Assert y have.text", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-action-header > .oxd-button').click()
        
        const ruta='iris2.jpg'
        cy.get('.oxd-file-div > .oxd-icon').attachFile(ruta)
        cy.wait(2000)


        
    })

})