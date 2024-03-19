class proyecyoIMV{
    visitaHome(){
        let tiempo=2000

        before(() => {
            cy.visit("https://imv.seg-social.es/")
            cy.title("eq","IMV|Ingreso Mínimo Vital")
            cy.wait(tiempo)
        })
    }
    /*
    PreguntasPrevias(name,last_name,age,t){
        let tiempo=t
        
    }

    Formulario(contry,notas,t){
        let tiempo=t
        

    }*/
        
}//final

export default proyecyoIMV;