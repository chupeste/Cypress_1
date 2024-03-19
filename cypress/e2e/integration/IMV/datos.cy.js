/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe(" Datos ciudadano", () => {

    it("Datos", () => {
        let t=2000
        cy.visit("https://generadordni.es/#profiles")
        cy.title("eq","Perfiles de usuario y empresas")
        cy.wait(t)

        cy.get('#result_profile_nif').invoke("text").as("DNI")
        
    })
})