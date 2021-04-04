import { navigateTo } from "../../support/pageObjects/navigationPage"

describe('test suite with then and wrap methods', () => {
    
    it('then and wrap methods', () => {

        cy.openHomePage()

        navigateTo.formLayoutsPage()

        // basic/simple example
        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')


        // selenium example (doesn't work)
        // const firstForm = cy.contains('nb-card', 'Using the Grid')
        // const secondForm = cy.contains('nb-card', 'Basic form')

        // firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
        // firstForm.find('[for="inputPassword2"]').should('contain', 'Password')

        // secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Password')


        // cypress example 
        cy.contains('nb-card', 'Using the Grid').then( firstForm => { 
            // after then method we use jQuery and Chai methods
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const paswordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(paswordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(emailLabelSecond).to.equal('Email address')
                expect(paswordLabelFirst).to.equal(passwordLabelSecond)

                // after wrap method we use Cypress methods back
                cy.wrap(firstForm).find('[for="inputEmail1"]').should('contain', 'Email')
                cy.wrap(firstForm).find('[for="inputPassword2"]').should('contain', 'Password')

                cy.wrap(secondForm).find('[for="exampleInputEmail1"]').should('contain', 'Email address')
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

            })

        })

    })

})