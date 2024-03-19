describe("Primer test con cypress", () =>{
  it("Mi primer Test -> Hola mundo",() =>{
      cy.log("Hola Mundo")
      cy.wait(4000)
  })
  it("segundo test -> campo name",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.get("#firstName").type("Cesar")
      cy.wait(4000)
  })
})