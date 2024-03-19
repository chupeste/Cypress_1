/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe(" alertas en cypress", () => {

    it("Alertas", () => {
        let t=2000
        cy.visit("https://imv.seg-social.es/")
        cy.title("eq","IMV|Ingreso Mínimo Vital")
        cy.wait(t)
        
    })
})