/// <reference types="Cypress" />  



require('cypress-plugin-tab')
require('cypress-xpath')

describe("Segundo reto  ", () =>{

    it("Probando la aplicación ",() =>{
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        //Buscando por xpath

        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")

        //Buscandop por ID

        cy.get("#searchsubmit").should("be.visible").click()

        //add

        cy.get('#add').should("be.be.visible").click()
        cy.get('#name').should("be.visible").type("cypress")
        cy.get('#introduced').should("be.visible").type("2023-03-05").tab().type("2023-03-15")

        //combo
        cy.get('#company').should("be.be.visible").select("Nokia").should("have.have.value","16").wait(1500)
        cy.get('.primary').should("be.be.visible").click()

        //Buscar
        cy.xpath("//input[contains(@id,'searchbox')]").type("cypress")
        cy.get("#searchsubmit").should("be.visible").click()



    })


  }) 