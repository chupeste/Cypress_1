/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')

describe("Nueva selección Assert ", () =>{

    it("Assert contains ",() =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should('eq','My Shop')
        cy.wait(1000)
        
        cy.get("#block_top_menu > ul").contains("Womem").click()
        })

        it("Assert find,eq ",() =>{
            cy.visit("http://www.automationpractice.pl/index.php")
            cy.title().should('eq','My Shop')
            cy.wait(1000)
            
            cy.get("#block_top_menu > ul > li:nth-child(1) > a").click()
            //cy.get(".product-container").first().click()
            cy.get(".product-container").find(".product-image-container").eq(3).click()  //eq indica el numero de elemento que quieres seleccionar 
            
            })
            
        it.only("Valindando que sea nuevo y el precio ",() =>{
            cy.visit("http://www.automationpractice.pl/index.php")
            cy.title().should('eq','My Shop')
             cy.wait(1000)
                
            cy.get("#block_top_menu > ul > li:nth-child(1) > a").click()
            cy.get(".product-container").find(".product-image-container").eq(3).click()
            cy.get("#product_condition .editable").then((e)=>{
                //cy.log(e.text())
                let estado=e.text()
                //cy.log(estado)
                if(estado=="New product"){
                    cy.log("El vestido es nuevo")
                }
                                                              //para saber el texto que tiene y guardarlo en nuna variable e imprimirlo 
            })
            
            cy.get("#our_price_display").then((e)=>{
                cy.log(e.text())
            })
            })
        it("Valindando que sea nuevo  ",() =>{
            cy.visit("http://www.automationpractice.pl/index.php")
            cy.title().should('eq','My Shop')
             cy.wait(1000)
                
            cy.get("#block_top_menu > ul > li:nth-child(1) > a").click()
            cy.get(".product-container").find(".product-image-container").eq(3).click()
            cy.get("#product_condition .editable").then((e)=>{
                //cy.log(e.text())
                let estado=e.text()
                //cy.log(estado)
                if(estado=="New product"){
                    cy.log("El vestido es nuevo")
                }
                                                              //para saber el texto que tiene y guardarlo en nuna variable e imprimirlo 
            })
            
            
            })
        })

        it.only("Valindando que sea nuevo y el precio ",() =>{
            cy.visit("http://www.automationpractice.pl/index.php")
            cy.title().should('eq','My Shop')
                    cy.wait(1000)
                
            cy.get("#block_top_menu > ul > li:nth-child(1) > a").click()
            cy.get(".product-container").find(".product-image-container").eq(3).click()
            cy.get("#product_condition .editable").then((e)=>{
                    //cy.log(e.text())
                let estado=e.text()
                    //cy.log(estado)
                if(estado=="New product"){
                cy.log("El vestido es nuevo")
                }
                                                              //para saber el texto que tiene y guardarlo en nuna variable e imprimirlo 
            })
            
            cy.get("#our_price_display").then((e)=>{
                cy.log(e.text())
                let precio=e.text()
                cy.log(precio)
                precio=precio.slice(1,5)    //slice = sirve para quitar o sumar un caracter 
                cy.log(precio)

                if(precio>50){
                    cy.log("el vestido esta fuera de nuestro presupuesto")
                    cy.xpath("//*[@id='columns']/div[1]/span[2]/span[1]/a/span").click()

                }else{
                    cy.log("el vestido esta en nuestro presupuesto, copntinuar con la compra")
                    cy.get("#group_1").select("M")
                    cy.get('#color_24').click()
                    //cy.get('#color_7').click()
                    cy.log("#add_to_cart > button > span").should("be.visible").click()
                }
            })
})

 