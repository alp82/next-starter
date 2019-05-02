// might be interesting: https://stackoverflow.com/questions/54937425/trying-to-make-cypress-typescript-and-istanbuljs-work-together

describe('Search Feature', () => {
  it('has a search field', () => {
    cy.visit('localhost:3000')
  })
  it('shows search query in input', () => {
    cy.visit('localhost:3000')
    cy.get('.search-field')
      .type('fake')
      .should('have.value', 'fake')
  })
  it('shows search results', () => {
    cy.visit('localhost:3000')
    cy.get('.search-field')
      .type('fake')
    cy.get('.search-result-gif')
      .should('have.length', 20)
  })
})