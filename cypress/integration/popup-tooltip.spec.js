/// <reference types="cypress" />

describe ('popup, tooltip, dialog box test suite', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('tooltip', ()=> {

        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips').contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })

    it('browser dialog box', ()=> {

        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('tbody tr').first().find('.nb-trash').click()
    })

})