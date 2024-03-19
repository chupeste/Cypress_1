/// <reference types="Cypress" />  

describe("Referencias a windows", () => {

    it("Windows propiedades charset", () => {
        
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(3000)
        
        cy.document().should("have.property","charset").and('eq','UTF-8')
    })
    it.only("Windows propiedades charset", () => {
        
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(3000)
        
        cy.url().should("include","random-number.html")
        cy.url().should('eq','https://testsheepnz.github.io/random-number.html')
    })
})