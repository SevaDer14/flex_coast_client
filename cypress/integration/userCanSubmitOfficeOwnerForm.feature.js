describe('user can submit inquiry to rent out a space with FlexCoast', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=rent-out-button]')
      .should('contain', 'Rent Out Office')
      .click()
  })

  it('is expected to submit rent out form', () => {
    cy.intercept(
      'POST',
      'https://flex-coast-api-production.herokuapp.com/api/**',
      {
        body: {
          message:
            'Thank you for your inquiry! We will be in touch with lovely offices soon.',
        },
      }
    )
    cy.url().should('contain', 'http://localhost:3001/rent_out')
    cy.get('[data-cy=rent-out-form]').within(() => {
      cy.get('[data-cy=name]').type('Edward Black')
      cy.get('[data-cy=phone]').type('0707123456')
      cy.get('[data-cy=email]').type('edward.black@mail.se')
      cy.get('[data-cy=notes]').type('No thanks for the awesome form')
      cy.get('[data-cy=submit-button]').click()
      cy.url().should('contain', 'http://localhost:3001')
      cy.get('[data-cy=success-message]').should(
        'contain',
        'Thank you for your inquiry'
      )
    })
  })
})
