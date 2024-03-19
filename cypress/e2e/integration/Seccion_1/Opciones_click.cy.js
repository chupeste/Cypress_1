/// <reference types="Cypress" />  


describe("Opciones de Click  ", () =>{

    it("Click sencillo ",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click()

    })

    it("Click Force true ",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click({force: true})

    })
    it.only("Click por coordenadas (x,y)",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.wait(1500)
        cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should("be.visible").click(50,5)

    })

  })  