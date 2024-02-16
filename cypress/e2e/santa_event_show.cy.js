/// <reference types="cypress" />

describe('show a santa event', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/events/ae1482c5-7f0b-4a8d-9eea-6262185f3b06')
    })

    it('shows event information', () => {
        cy.contains("Event name: Cool santa time")
    })
})