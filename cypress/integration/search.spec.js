describe('Search Feature', function() {
  it('has a search field', function() {
    cy.visit('localhost:3000')
  })
  it('shows search query in input', function() {
    cy.visit('localhost:3000')
    cy.get('.search-field')
      .type('fake')
      .should('have.value', 'fake')
  })
  it('shows search results', function() {
    cy.visit('localhost:3000')
    cy.get('.search-field')
      .type('fake')
    cy.get('.search-result-gif')
      .should('have.length', 20)
  })
})