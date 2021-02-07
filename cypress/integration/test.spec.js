/// <reference types="cypress" />


describe('test description', () => {

    beforeEach(() => {

        cy.visit('/')

    })
    

    it('first test', () => {


        cy.contains('Layout')
            .click()
        
        cy.contains('Stepper')
            .click()

        cy.get('[class="col-md-12 col-lg-12 col-xxxl-12"]')

    })

})