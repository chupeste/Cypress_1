/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe(" Cypress eventos con el Mause", () => {

    it("Drag and drop", () => {
        let tiempo=1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title("eq","The Internet")

        cy.wait(tiempo)
        cy.get("#column-a").drag("#column-b",{force:true})
          
    })
    it("Drag and drop 2", () => {
        let tiempo=1000
        cy.visit("https://www.cssscript.com/demo/mobile-friendly-drag-drop/#google_vignette")
        cy.title("eq","Drog.js Drag And Drop Library Example")

        cy.wait(tiempo)
        cy.get('[name="drag-head"]').drag("[name='drag-body']",{force:true})
        
    })
    it("Mouse over", () => {
        let tiempo=1500
        cy.visit("https://www.way2automation.com/")
        cy.title("eq","Get Online Selenium Certification Course | Way2Automatione")
        cy.wait(tiempo)

        cy.contains("All Courses").trigger('mouseover')
        cy.wait(tiempo)

        cy.contains("Selenium with Python").invoke("removeAttr")
        
    })
    it.only("sliders", () => {
        let tiempo=1500
        cy.visit("https://www.w3schools.com/howto/howto_js_rangeslider.asp")
        cy.title("eq","How To Create Range Sliders")
        cy.wait(tiempo)

        cy.get('#accept-choices').click()
        cy.get('#id2').invoke("attr","value","10")
        cy.wait(tiempo)
        cy.get('#id1').invoke("attr","value","10")
        cy.wait(tiempo)
        cy.get('#id3').invoke("attr","value","10")
        cy.wait(tiempo)
    })

})