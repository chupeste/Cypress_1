/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'


describe(" Cypress Bucles For y Each", () => {
    /*
    it("For uno", () => {
        
        for(let i=0; i<100;i=i+10){
            cy.log("Numero: " + i)
        }
    })
    it("For Dos", () => {
        
        for(let i=0; i<=10;i=i++){
            let t=5
            cy.log(t + "x" + i + "=" + t*i)
        }
    })
    it("Each uno", () => {

        let tiempo=1500
        
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should('eq','My Shop')
        cy.wait(tiempo)

        
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
        cy.get(".product-container").each(($el,index,$list)=>{
            //cy.log(index)
            //cy.log($list)

            let vestido=$el.text()
            cy.log(vestido)
        })
    


    })
    it("Each dos", () => {

        let tiempo=1500
        
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should('eq','My Shop')
        cy.wait(tiempo)

        
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
        cy.get(".product-container").each(($el,index,$list)=>{
            //cy.log(index)
            //cy.log($list)

            let vestido=$el.text()
            
            if(vestido.includes("Printed Dress")){
                cy.wrap($el).click()
            }
        })*/

    it.only("Each tres", () => {

        let tiempo=1500
            
            cy.visit("http://www.automationpractice.pl/index.php")
            cy.title().should('eq','My Shop')
            cy.wait(tiempo)
            cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
            const datos=[];

            cy.get(".product-name").each(($el,index,$list)=>{
                datos[index]=$el.text()
            }).then(()=>{
                for(let x=0; x<=datos.length; x++){
                    cy.get("#center_column .product-name").eq(x).click({force:true})
                    cy.wait(tiempo)
                    cy.get('#group_1').select("2")
                    cy.get('#quantity_wanted').should("be.visible").clear({force:true}).type("1")
                    cy.get('.exclusive > span').click({force:true})
                    cy.get('.button-medium > span').click({force:true})
                    cy.get('.icon-home').click()

                }   


            })

            
            
    })


})


