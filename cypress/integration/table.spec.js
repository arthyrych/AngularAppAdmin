/// <reference types="cypress" />

describe ('table test suite', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('table test', ()=> {

        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
       })

    })

})