/// <reference types="Cypress" />  

describe("Seccion 1 Validando el título  ", () =>{

    it("Testy Validar el título ",() =>{
        cy.visit("https://demoqa.com/text-box ")
        cy.title().should('eq','DEMOQA')

        cy.log("ok la funcion title fuinciono bien")
    })


  }) //Cierre de describe