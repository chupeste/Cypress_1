describe("Primer test con cypress", () =>{
    it("Esto es un Hola mundo desde Cyupress", () =>{
        cy.log("Bienvenido a Cypress")
        cy.visit("https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwj2-d7pw4qEAxV3VaQEHW3fCaYQPAgJ")
        cy.get("#L2AGLb").click()
        cy.get("#APjFqb").type("Consola")
        
        cy.wait(4000)

    })
})
