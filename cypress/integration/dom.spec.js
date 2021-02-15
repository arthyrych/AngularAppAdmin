/// <reference types="cypress" />

describe('test suite with the dom moving', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('first test with moving through the dom', () => {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // created own locator using Attribute with value
        // finding this unique locator
        cy.get('[data-cy="signInButton"]')

        // finding the element using text (it will take the first one on the page)
        cy.contains('Sign in')

        // finding the element using text and Attribute with value 
        cy.contains('[status="warning"]', 'Sign in')

        // travelling through the dom using the unique element
        cy.get('#inputEmail3')
            .parents('form') // moving to the parent element
            .find('button') // looking for the child element
            .should('contain', 'Sign in') // assertion
            .parents('form') // moving to the parent element again
            .find('nb-checkbox') // looking for the child element again
            .click()

        // another example with getting the element through another unique element
        cy.contains('nb-card', 'Horizontal form')
            .find('[type="email"]')
    })

    it('second test with moving through the dom', () => {

        // own example
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('Basic form')
            .parents('nb-card')
            .find('nb-checkbox')
            .click()
            .click()
            .click()
    })
    
})