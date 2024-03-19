/// <reference types='Cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe('Hoock ejemplos', () => {
    let t=2000

    before(()=>{
        cy.visit('https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp')
        cy.title('eq','How To Display Text when a Checkbox is Checked')
        cy.get('#accept-choices').should("be.visible").click({force:true})
        cy.wait(t)
    })
    it('Test uno', () => {
        cy.get('#myCheck').should("be.visible").click({force:true})
        cy.wait(t)
        
    })
    it('Test dos', () => {
        cy.get('[href="howto_js_tabs.asp"]').click({force:true})
        cy.wait(t)
        
    })
})