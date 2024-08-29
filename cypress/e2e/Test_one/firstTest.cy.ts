describe('First test suite', () => {

    it("sprawdzamy dziełanie", () => {
        cy.visit("/")

        cy.get('#userName').
            wait(100).
            type("Administrator")

        cy.getCookie('X-CSRF-TOKEN')
            .then(async (c) => {
                cy.log(c.value)

                return c.value
            })
        cy.get('#btnLogin').click()

        cy.get('#OKButton').click()

        cy.get('[class^=nav-menu-folder]').find('[class^=nav-menu]').find('[class^=nav-items]').then(tableRow =>{
            cy.wrap(tableRow).should('contain', 'Kadry i płace')
        })
    })
})