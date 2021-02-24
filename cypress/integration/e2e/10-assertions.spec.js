describe('assertions test suite', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('assertions', ()=> {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // should format
        cy.get('[for="exampleInputEmail1"]')
            .should('contain', 'Email address')
            .should('have.class', 'label')
            .and('have.text', 'Email address')

        // expect format
        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal('Email address')
            expect(label).to.have.class('label')
            expect(label).to.have.text('Email address')
        })


    })
})