class ProyectoUno_Po{
    visitHome(){
        let tiempo=2000

        before(() => {
            cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
            cy.title('eq','Input Validation')
            cy.wait(tiempo)
        })
    }

    SeccionUno(name,last_name,age,t){
        let tiempo=t
        cy.get('#firstname').clear().should('be.visible').type(name)
        cy.wait(tiempo)
        cy.get('#surname').clear().should('be.visible').type(last_name)
        cy.wait(tiempo)
        cy.get('#age').clear().should('be.visible').type(age)
        cy.wait(tiempo)
    }

    SeccionDos(contry,notas,t){
        let tiempo=t
        cy.get('#country').select(contry,{ force:true })
        cy.wait(tiempo)
        cy.get('#notes').clear().should('be.visible').type(notas)
        cy.wait(tiempo)

    }
        
}//final

export default ProyectoUno_Po;