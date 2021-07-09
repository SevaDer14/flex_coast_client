describe('user can submit inquiry to rent out a space with FlexCoast', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('is expected to navigate to form page', () => {
    cy.get('[data-cy=rent-out-button]').click()
    cy.url().should('contain', 'http://localhost:3001/rent_out')
  });
})
