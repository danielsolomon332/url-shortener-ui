describe('Main', () => {
  it('As a user, on page load I should see a title', () => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/*', {
    statusCode: 200
  }).as('matchedUrl')
  cy.visit('http://localhost:3000/')
      .get('h1[class="page-title"]')
      .should('contain', 'URL Shortener')
      .get('.short-url').first().should('contain', 'http://localhost:3001/useshorturl/1')
  })

  it('As a user, on page load I should see a form with proper inputs', () => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/*', {
    statusCode: 200
  }).as('matchedUrl')
  cy.visit('http://localhost:3000/')
    .get('form').should('exist')
    .get('.title-response').should('have.value', '')
    .get('.url-response').should('have.value', '')
  })

  it('As a user, when I type in the form fields, it should be reflected in their values', () => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/*', {
    statusCode: 200
  }).as('matchedUrl')
  cy.visit('http://localhost:3000/')
    .get('.title-response').type('Photo 3').should('have.value', 'Photo 3')
    .get('.url-response').type('https://images.unsplash.com/fakeurl').should('have.value', 'https://images.unsplash.com/fakeurl')
  })
})
