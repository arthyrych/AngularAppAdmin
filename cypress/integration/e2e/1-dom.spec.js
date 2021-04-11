import { navigateTo } from "../../support/pageObjects/navigationPage"

describe('test suite with the dom moving', () => {

    it('first test with moving through the dom', () => {
        cy.openHomePage()
        navigateTo.formLayoutsPage()

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
            .find('button') // moving to the child element
            .should('contain', 'Sign in') // asserting the child element
            .parents('form') // moving to the parent element again
            .find('nb-checkbox') // moving to the child element again
            .click()

        // another example with getting the element through another unique element
        cy.contains('nb-card', 'Horizontal form')
            .find('[type="email"]')
    })

    it('second test with moving through the dom', () => {
        cy.openHomePage()
        navigateTo.formLayoutsPage()
        cy.contains('Basic form').parents('nb-card').find('nb-checkbox').click()
    })
    
})