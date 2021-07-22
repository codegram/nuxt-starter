describe('The Home Page', () => {
  it('should visit the home page', () => {
    cy.visit('/')
    cy.findByText('Welcome to Nuxt-Starter')
  })
})
