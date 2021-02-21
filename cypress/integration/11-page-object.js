/// <reference types="cypress" />

import { navigateTo } from "../support/pageObjects/navigationPage"

describe('page object test suite', ()=> {

    beforeEach('open app', ()=> {
        cy.visit('/')
    })

    it('verify navigations across the pages', ()=> {

        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })

})