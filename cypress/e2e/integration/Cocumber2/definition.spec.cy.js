

Given('abrir el navaear principal',()=>{
    cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
})

When('cargando el nombre',()=>{
    cy.get("#firstname").should("be.visible").type("Cesar")
    cy.wait(1000)
})

When('cargando email',()=>{
    cy.get('#surname').should("be.visible").type("Ramos")
    cy.wait(1000)
})

And('cargando dirección',()=>{
    cy.get('#age').should("be.visible").type("45")
    cy.wait(1000)
})

Then('Validar el nombre de la pagina',()=>{
    cy.title('eq','Input Validation')
    cy.wait(1000)

})