/// <reference types='Cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe('description', () => {

    it('test', () => {
        let t=2000
        cy.visit('https://demoqa.com/')
        cy.title('eq','DEMOQA')
        cy.wait(t)

        cy.get('.category-cards > :nth-child(1) > :nth-child(1)').should("be.visible").click({force:true})
        cy.wait(t)
        cy.get(':nth-child(1) > .group-header > .header-wrapper').should("be.visible").click({force:true})
        cy.wait(t)
        cy.go("back")
        cy.go("back")
        cy.go("forward")
    })
})