/// <reference types="cypress" />


describe('first test suite', () => {

    beforeEach(() => {

        cy.visit('/')

    })


    it('first example with moving through dom', () => {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]', 'Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        cy.contains('nb-card', 'Horizontal form')
            .find('[type="email"]')
            .parents('form')
            .should('contain', 'Email')

    })


    it('second example with moving through dom', () => {

        cy.contains('Basic form')
            .parents('nb-card')
            .find('nb-checkbox')
            .click()
            .click()
            .click()

    })
    
})