/// <reference types="cypress" />

describe('invoke method test suite', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('invoke method test', ()=> {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // 1 example
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // 2 example
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
        })

        // 3 example
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })

        // 4 example
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain', 'checked')
            .then( classValue => {
                expect(classValue).to.contain('checked')
            })

        // 5 example
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker')
            .find('input')
            .then( input => {
                cy.wrap(input).click()
                cy.get('nb-calendar-day-picker').contains('15').click()
                cy.wrap(input).invoke('prop', 'value').should('contain', 'Feb 15, 2021')
            })

    })
    
})