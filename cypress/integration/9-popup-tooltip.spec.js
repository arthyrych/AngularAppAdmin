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

        // 1 example
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', (confirm)=> {
            expect(confirm).to.equal('Are you sure you want to delete?')
        }) 

        // 2 example (recommended)
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })

        // 3 example (to cancel)
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)
    })

})