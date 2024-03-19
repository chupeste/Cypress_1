/// <reference types='Cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe('Carga de Fixture', () => {

    /*
    before(function(){
        cy.fixture('datos2').then(function(data){
            globalThis.data=data
        })
    })*/

    it('test', () => {
        //let t=2000
        //cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        //cy.title('eq','Input Validation')
        //cy.wait(t)

        cy.fixture("MOCK_DATA").then( tesData =>{
            tesData.forEach(data => {
                const d_nombre=data.nombre
                const d_apellido=data.apellido
                const d_age=data.age
                let t=2000
                cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
                cy.title('eq','Input Validation')
                cy.wait(t)

                cy.get("#firstname").should("be.visible").type(d_nombre)
                cy.get('#surname').should("be.visible").type(d_apellido)
                cy.get('#age').should("be.visible").type(d_age)
                cy.wait(t)
                cy.get('[type="submit"]').click({force:true})
                cy.wait(t)
                cy.get('#backtoform').click({force:true})
                cy.wait(t)
            })
        })

        
    })
})