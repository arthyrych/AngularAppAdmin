export class DatepickerPage{

    selectCommonDatepickerDate(){
        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            let selectedDay = 15
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains(selectedDay).click()
            cy.wrap(input).invoke('prop', 'value').should('contain', selectedDay)
        })
    }

}

export const onDatepickerPage = new DatepickerPage()