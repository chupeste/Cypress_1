/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe(" Cypress eventos con el Mause", () => {

    it("Drag and drop", () => {
        let tiempo=1000
        cy.visit("https://mdbootstrap.com/docs/b4/jquery/forms/date-picker/")
        cy.title("eq","Bootstrap 4 Date Picker - examples & tutorial")

        //cy.get('#date-picker-example > #example').should("be.visible").type("09/09/2023").then(()=>{
           // cy.get('#date-picker-example > #example').should("be.visible").type('{esc}')
                        
        //})
        cy.get('#date-picker-example > #example').should("be.visible").click()
        cy.wait(tiempo)
        cy.get('#date-picker-example_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > #example_table > tbody > :nth-child(2) > :nth-child(5) > .picker__day').click({force:true})

    })

})