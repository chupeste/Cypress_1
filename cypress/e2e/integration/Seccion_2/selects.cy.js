/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')

describe("Nueva selección checkbox ", () =>{

    it("Check box ",() =>{
        cy.visit("https://imv.seg-social.es/")
        cy.title().should('eq','IMV|Ingreso Mínimo Vital')
        cy.wait(1000)
        
        cy.get('#content > div > .hydrated').should("be.visible").click()
        cy.get('#province > .hydrated').click()
        cy.get('province-label').select("ALBACETE")
        //cy.xpath("//*[@id='province-list']").select("ALBACETE")


    })

    it("Select dos",() =>{
        cy.visit("https://www.google.com/ ")
        cy.title().should('eq',"Google")
        cy.wait(1500)

        cy.get("#L2AGLb > div").click()
        cy.get('#APjFqb').should("be.visible").type("BMW").type("{enter}")
        //cy.wait(1500)
        //cy.get('.XDyW0e').click()
        cy.get('[data-hveid="CBgQAA"] > .LatpMc > .GKS7s').click()


    })
    it.only("Select tres",() =>{
        cy.visit("https://www.google.com/ ")
        cy.title().should('eq',"Google")
        cy.wait(1500)

        cy.get("#L2AGLb > div").click()
        cy.get('#APjFqb').should("be.visible").type("BMW").type("{enter}")
        //cy.wait(1500)
        //cy.get('.XDyW0e').click()
        cy.get('[data-hveid="CBgQAA"] > .LatpMc > .GKS7s').click()


    })

  }) 