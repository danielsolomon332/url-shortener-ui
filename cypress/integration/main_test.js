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

  it('As a user, when I type I subit the form, it should be displayed on the DOM', () => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/*', {
    statusCode: 200
  }).as('matchedUrl')
  cy.visit('http://localhost:3000/')
    .get('.title-response').type('Newest One')
    .get('.url-response').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=33')
    .get('.shorten-button').click()
    .get('.short-url').last().should('contain', 'http://localhost:3001/useshorturl/')
  })
})
