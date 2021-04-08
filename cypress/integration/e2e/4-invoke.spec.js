import { navigateTo } from "../../support/pageObjects/navigationPage"

describe('invoke method test suite', ()=> {

    it('invoke method test', ()=> {
        cy.openHomePage()
        navigateTo.formLayoutsPage()

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
        navigateTo.datepickerPage()

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
                let selectedDay = 15
                cy.wrap(input).click()
                cy.get('nb-calendar-day-picker').contains(selectedDay).click()
                cy.wrap(input).invoke('prop', 'value').should('contain', selectedDay)
            })

    })
    
})