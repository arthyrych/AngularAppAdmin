import { navigateTo } from "../../support/pageObjects/navigationPage"

describe('checkbox and radio button test suite', ()=> {

    it('radio button', ()=> {
        cy.openHomePage()
        navigateTo.formLayoutsPage()

        // first way (simple)
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(0).check({force: true}).should('be.checked')
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(1).check({force: true})
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(0).should('not.be.checked')
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(2).should('be.disabled')

        // second way (recommended)
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
                cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')
                cy.wrap(radioButtons).eq(1).check({force: true})
                cy.wrap(radioButtons).eq(0).should('not.be.checked')
                cy.wrap(radioButtons).eq(2).should('be.disabled')
        })

    })

    it('checkbox', ()=> {
        cy.openHomePage()
        navigateTo.toasterPage()

        // check method only checks (can check all elements at once)
        cy.get('[type="checkbox"]').check({force: true}).should('be.checked')

        // to uncheck you need to use click method (can uncheck the only one element per time)
        cy.get('[type="checkbox"]').eq(0).click({force: true}).should('not.be.checked')
    })

})