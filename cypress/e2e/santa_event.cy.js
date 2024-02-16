/// <reference types="cypress" />

describe('create a santa event', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays create santa event form', () => {
    cy.get('input[name=name]').should('have.value', '')
  })

  it('can add a new event', () => {
    cy.intercept({
      method: 'POST',
      url: '**/events/new',
    }, {
      statusCode: 200,
      body: { name: "test", uuid: "ae1482c5-7f0b-4a8d-9eea-6262185f3b06" },
    })
    
    const name = 'Cool santa time'
    cy.get('[data-test=name]').type(`${name}{enter}`)
   
    cy.location('pathname').should('eq', '/events/ae1482c5-7f0b-4a8d-9eea-6262185f3b06')
  })
})
