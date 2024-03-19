//import proyecyoIMV from '../../../support/IMV/Ciudadano.cy';
/// <reference types="Cypress" />  
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'


describe('IMV', () => {
     
    
    let tiempo=2000

    before(() => {
        cy.visit("https://imv.seg-social.es/")
        cy.title("eq","IMV|Ingreso Mínimo Vital")
        cy.wait(tiempo)
    })
    //const master1=new proyecyoIMV()
    //master1.visitaHome()
    
    //Cypress.on('uncaught:exception',(err,runnable)=>{
        //return false
    //})
    /*
    it('test Seccion Uno', () => {
        master.SeccionUno("Cesar","Ramos","45",1000)
        
    })
    it('test Seccion Dos', () => {
        master.SeccionDos("Colombia","la mejor",1000)
        
    })*/
});