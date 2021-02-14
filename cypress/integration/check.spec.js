/// <reference types="cypress" />


describe('checkbox and radio button test suite', ()=> {


    beforeEach(()=> {

        cy.visit('/')

    })


    it('radio button', ()=> {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid')
            .find('[type="radio"]')
            // taking 3 elements to jQuery object
            .then( radioButtons => {
                // checking the first checkbox 
                cy.wrap(radioButtons)
                    .eq(0)
                    //.first()
                    .check({force: true})
                    .should('be.checked')

                // checking the second checkbox
                cy.wrap(radioButtons)
                    .eq(1)
                    .check({force: true})

                // verifying the first checkbox is unchecked 
                cy.wrap(radioButtons)
                    .eq(0)
                    //.first()
                    .should('not.be.checked')

                // verifying the third checkbox is disabled
                cy.wrap(radioButtons)
                    .eq(2)
                    .should('be.disabled')
            })

    })


    it('checkbox', ()=> {

        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        // check method only checks (can check all elements at once)
        cy.get('[type="checkbox"]').eq(1).check({force: true}).should('be.checked')

        // to uncheck you need to use click method (can uncheck the only one element per time)
        cy.get('[type="checkbox"]').eq(0).click({force: true}).should('not.be.checked')

    })

})