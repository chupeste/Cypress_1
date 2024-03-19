/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')

describe("Nueva selección checkbox ", () =>{

    it("Check box ",() =>{
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/")
        cy.title().should('eq','jQuery Dual List Box Demo')
        cy.wait(1000)
        
        cy.get("#dual-list-box-employees > div:nth-child(1) > select").select(["Aisha Ballard","Bernice Ford","Delacruz Rojas"]).then(()=>{
            cy.get('.str').should("be.visible").click()
        })

    })

  }) 