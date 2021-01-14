describe('DailyTask', () => {
    it('Should display Useful Links page', () => {
        cy.visit('https://luispuentesvega.github.io/useful-links/#/')
        cy.get('h1').contains('Links')
    })
    it('Should fill out the form and a link', () => {
        cy.get('[name="topic"]').select('React JS')
        cy.get('[name="title"]').type('Oficial Doc')
        cy.get('[name="url"]').type('https://reactjs.org/')
        cy.get('.btn').click()
    })
    it('Should find the link added', () => {
        cy.get('.caption').contains('.link', 'Oficial Doc')
    })
})
