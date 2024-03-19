/// <reference types="Cypress" />  

describe(" Assert", () => {

    it("Reto Assert", () => {
        
        let tiempo=1300
        cy.visit("https://testsheepnz.github.io/BasicCalculator.html")

        cy.title().should('eq','Basic Calculator')
        cy.wait(tiempo)
        
        let a=35
        let b=20

        cy.get('#number1Field').should("be.visible").and("have.class","element text medium").type(a)
        cy.wait(tiempo)
        cy.get('#number2Field').should("be.visible").and("have.class","element text medium").type(b)
        cy.wait(tiempo)
        cy.get('#calculateButton').click()

        cy.get("#numberAnswerField").should("be.visible").then((e)=>{
            let r=a+b
            cy.log("el valor de r: "+r)
            cy.log(e.text())
            let res=e.text()
            if(r==res){
                cy.log("son igules")
            }else{
                cy.log("el resulado es incorrecto")
            }

            if(res>50){
                a=a-10 
                b=b-10
                cy.get('#number1Field').invoke("attr","")
                cy.wait(tiempo)
                cy.get('#number2Field').should("be.visible").and("have.class","element text medium").clear().type(b)
                cy.wait(tiempo)
                cy.get('#calculateButton').click()

            }else{
                a=a+5 
                b=b+5
                cy.get('#number1Field').should("be.visible").and("have.class","element text medium").clear().type(a)
                cy.wait(tiempo)
                cy.get('#number2Field').should("be.visible").and("have.class","element text medium").clear().type(b)
                cy.wait(tiempo)
                cy.get('#calculateButton').click()
            }
        })
    })
   
})