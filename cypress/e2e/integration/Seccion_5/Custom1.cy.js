/// <reference types='Cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe('description', () => {

    it('test', () => {
        let t=2000
        cy.visit('url')
        cy.title('eq','titulo')
        cy.wait(t)
    })
})