import { navigateTo } from "../../support/pageObjects/navigationPage"

describe ('table test suite', ()=> {

    it('table test', ()=> {
        cy.openHomePage()
        navigateTo.smartTablePage()

        // 1 example
        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
       })

       // 2 example 
       cy.get('thead').find('.nb-plus').click()
       cy.get('thead').find('tr').eq(2).then( tableRow => {
           cy.wrap(tableRow).find('[placeholder="First Name"]').type('Artem')
           cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Hyrych')
           cy.wrap(tableRow).find('[class="nb-checkmark"]').click()
       })

       cy.get('tbody tr').first().find('td').then( tableColumns => {
           cy.wrap(tableColumns).eq(2).should('contain', 'Artem')
           cy.wrap(tableColumns).eq(3).should('contain', 'Hyrych')
       })

       // 3 example
       const age = [20, 30, 40, 200]

       cy.wrap(age).each( age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(300)
            cy.get('tbody tr').each( tableRow => {
                if(age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
        })


       })

    })

})