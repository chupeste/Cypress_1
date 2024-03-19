/// <reference types="Cypress" />  

describe(" Assert", () => {

    it("Assert y have.text", () => {
        cy.visit("http://demoqa.com/text-box")

        cy.title().should('eq','DEMOQA')
        cy.wait(3000)
        //COMPRUEBA UN TEXTO INTRODUCIDO (HAVE.TEXT)
        cy.get("#userName").should("be.visible").type("Cesar Ramos")
        cy.get("#userEmail").should("be.visible").type("cesar@gmail.com")
        cy.get("#submit").should("be.visible").click()

        cy.get("#name").should("have.text","Neme:Cesar Ramos")
    })
    it("Assert Contain.text ", () => {
        cy.visit("http://demoqa.com/text-box")

        cy.title().should('eq','DEMOQA')
        cy.wait(3000)
           //COMPRUEBA PARTE DE UN TEXTO INTRODUCIDO   (CONTAIN.TEXT)
        cy.get("#userName").should("be.visible").type("Cesar Ramos")
        cy.get("#userEmail").should("be.visible").type("cesar@gmail.com")
        cy.get("#submit").should("be.visible").click()

        cy.get("#name").should("contain.text","Neme:Cesar")
    })
    it.only("Assert have.text mas then ", () => {
        cy.visit("http://demoqa.com/text-box")

        cy.title().should('eq','DEMOQA')
        cy.wait(3000)
           //calida  el texto introducido 
        cy.get("#userName").should("be.visible").type("Cesar Ramos")
        cy.get("#userName").should("contain.value","Cesar Ramos").then(()=>{
            cy.get("#userEmail").should("be.visible").type("cesar@gmail.com")
            cy.get("#submit").should("be.visible").click()

        })
        
        
    })
})