/// <reference types="cypress" />

describe("first test describe", () => {

    beforeEach("code for every test", () => {

        cy.visit('/')

    })
    

    it("first test with locators", () => {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by Tag Name
        cy.get('input')

        // by ID
        cy.get('#inputEmail1')

        // by Class name
        cy.get('.input-full-width')

        // by Attribute name
        cy.get('[placeholder]')

        // by Attribute name and value
        cy.get('[placeholder="Email"]')

        // by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        // by two different attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // by tag name, attribute with value, ID and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // the most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')

    })


    it('second test', () => {

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


    it('third test', () => {

        cy.contains('Basic form')
            .parents('nb-card')
            .find('nb-checkbox')
            .click()
            .click()
            .click()


    })

})