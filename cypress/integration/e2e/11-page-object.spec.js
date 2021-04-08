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
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPass('test@test.com', 'fakepass')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Hyrych')
        onSmartTablePage.updateAgeByFirstName('Artem', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })

})