/// <reference types="Cypress" />  


require('cypress-plugin-tab')
require('cypress-xpath')


describe("Primer reto ", () =>{

    it("Selectores con xpath ",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()

        cy.xpath("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span").should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-input').should("be.visible").type("admin")
        cy.wait(1500)
        cy.get(':nth-child(2) > .oxd-input').should("be.visible").clear()
        
    })


})  