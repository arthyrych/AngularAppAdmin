import { onDatepickerPage } from "../../support/pageObjects/datepickerPage"
import { onFormLayoutsPage } from "../../support/pageObjects/formLayoutsPage"
import { navigateTo } from "../../support/pageObjects/navigationPage"
import { onSmartTablePage } from "../../support/pageObjects/smartTablePage"

describe('page object test suite', ()=> {

    it('verify navigations across the pages', ()=> {
        cy.openHomePage()
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })

    it('should submit Inline and Basic form and select tomorrow date in the calendar', ()=> {
        cy.openHomePage()
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail(Cypress.env('name'), Cypress.env('email'))
        onFormLayoutsPage.submitBasicFormWithEmailAndPass(Cypress.env('email'), Cypress.env('pass'))
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDate()
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName(Cypress.env('name'), Cypress.env('surname'))
        onSmartTablePage.updateAgeByFirstName(Cypress.env('name'), Cypress.env('age'))
        onSmartTablePage.deleteRowByIndex(1)
    })

})