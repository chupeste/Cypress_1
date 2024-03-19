import ProyectoUno_Po from '../../../support/pageObjects/proyectoUno_PO.cy'
/// <reference types='Cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'


describe('Page Object Models', () => {

    const master=new ProyectoUno_Po()
    master.visitHome()
    
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    
    it('test Seccion Uno', () => {
        master.SeccionUno("Cesar","Ramos","45",1000)
        
    })
    it('test Seccion Dos', () => {
        master.SeccionDos("Colombia","la mejor",1000)
        
    })
});