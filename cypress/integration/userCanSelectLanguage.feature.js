describe('User can switch between languages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to change the UI language', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()

    context('checking Swedish page', () => {
      cy.get('[data-cy=welcome-message]').should(
        'contain',
        'Flexibla kontor i vackra Göteborg'
      )
      cy.get('[data-cy=pitch-message]').should(
        'contain',
        'Ditt fokus är att bygga ett fantastiskt företag. Vårt fokus är att hitta det bästa kontoret för dig och ditt team.'
      )
      cy.get('[data-cy=offer-1]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Valfri storlek')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Från ett öppet landskap till ett eget rum'
        )
      })
      cy.get('[data-cy=offer-2]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'På dina villkor')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Månad, kvartal eller längre perioder'
        )
      })
      cy.get('[data-cy=offer-3]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Bästa lägena')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Välj bland dem bästa lägena i Göteborg'
        )
      })
      cy.get('[data-cy=footer-about-header]').should('contain', 'Om Oss')
      cy.get('[data-cy=footer-about-us]').should('contain', 'Vi erbjuder topnotch kontorslokaler i Göteborg med flexibla villkor och kortvariga kontrakt.')
      cy.get('[data-cy=footer-contact-header]').should('contain', 'Kontakta Oss')
      cy.get('[data-cy=footer-find-us-header]').should('contain', 'Hitta Oss')
    })

    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()

    context('checking English page', () => {
      cy.get('[data-cy=welcome-message]').should(
        'contain',
        'Flexible office spaces in beautiful Gothenburg'
      )
      cy.get('[data-cy=pitch-message]').should(
        'contain',
        'Your focus is to build an awesome company. Our focus is to find the best office for you and your team.'
      )
      cy.get('[data-cy=offer-1]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Any size space')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'From a single desk, all the way up to configured offices.'
        )
      })
      cy.get('[data-cy=offer-2]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'On your terms')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Month, quarter or longer periods.'
        )
      })
      cy.get('[data-cy=offer-3]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Best Locations')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Choose places from the most beautiful parts of Gothenburg.'
        )
      })
      cy.get('[data-cy=footer-about-header]').should('contain', 'About Us')
      cy.get('[data-cy=footer-about-us]').should('contain', 'We provide high end office spaces in Gothenburg with flexible conditions and short term contracts.')
      cy.get('[data-cy=footer-contact-header]').should('contain', 'Contact')
      cy.get('[data-cy=footer-find-us-header]').should('contain', 'Find Us')
    })
  })
})
