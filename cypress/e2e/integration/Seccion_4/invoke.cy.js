/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe("Invoke en cypress", () => {

    it("Invoke text", () => {
        let t=2000
        cy.visit("https://imv.seg-social.es/")
        cy.title("eq","IMV|Ingreso Mínimo Vital")
        cy.wait(t)
        const datos=[];
        
        cy.get('[slot="body"]').invoke("text").as("info")
        cy.get("@info").should("contain","Accede al formulario para presentar la solicitud del Ingreso Mínimo Vital o realizar una simulación de tu posible derecho a esta prestación. Al realizar la solicitud, también estudiaremos si tienes derecho al Complemento de Ayuda a la Infancia.")
    })

    it("Invoke estilos", () => {
        let t=2000
        cy.visit("https://imv.seg-social.es/")
        cy.title("eq","IMV|Ingreso Mínimo Vital")
        cy.wait(t)
        
        
        cy.get('[slot="body"]').invoke("attr","style","color:red;font-size: 50px") 
    })

    it("Invoke ocultar y mostrar", () => {
        let t=2000
        cy.visit("https://imv.seg-social.es/")
        cy.title("eq","IMV|Ingreso Mínimo Vital")
        cy.wait(t)
        
        
        cy.get('[slot="body"]').invoke("hide")   //hide: ocuiltar
        cy.wait(t)
        cy.get('[slot="body"]').invoke("show","25")   //hide: mostrar
    })
    it("Invoke src", () => {
        let t=2000
        cy.visit("https://imv.seg-social.es/")
        cy.title("eq","IMV|Ingreso Mínimo Vital")
        cy.wait(t)
        
        cy.get("#div > slot:nth-child(1) > div > a > figure.imv-ui-header__figure.imv-ui-header__figure--second > img").invoke("attr","src").should("include","logo-seguridad-social.png")
        
    })

    it.only("Invoke target_blank", () => {
        let t=2000
        cy.visit("https://imv.seg-social.es/")
        cy.title("eq","IMV|Ingreso Mínimo Vital")
        cy.wait(t)
        
        cy.get("#div > slot:nth-child(1) > div > a > figure.imv-ui-header__figure.imv-ui-header__figure--second > img").invoke("attr","src").should("include","logo-seguridad-social.png")
        
    })
})