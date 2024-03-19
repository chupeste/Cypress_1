/// <reference types='Cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
describe('Reto de la función Hooks', () =>{ 
    let tiempo=3000
    before(()=>{    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.title().should('eq','OrangeHRM')
        cy.wait(tiempo)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('Admin')
       
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('admin123')
        
        cy.get('.oxd-button').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })
    after(() => {
        cy.log("################# Ultimo Ciclo --- Final de todo ###################")
        cy.wait(2000)
        cy.get('.oxd-userdropdown-tab > .oxd-icon').should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a").should('be.visible').click({force: true})
        cy.wait(tiempo)
        
      })
    it('test uno', () =>{      
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

    it('test dos', () =>{      
        cy.get(':nth-child(3) > .oxd-main-menu-item').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

    it('test tres', () =>{      
        cy.get(':nth-child(12) > .oxd-main-menu-item').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

});
