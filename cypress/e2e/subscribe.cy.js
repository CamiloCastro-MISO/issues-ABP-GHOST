describe('Testing GHOST ABP', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Test Login', () => {
        console.log("test para subss")
        cy.wait(1000)
        cy.get('input#identification').type('bc.castro@uniandes.edu.co')
        cy.wait(2000)
        cy.screenshot('screenshot-1-after-click');
        cy.get('input#password').type('Aslan2920..#$')
        cy.wait(2000)
        cy.screenshot('screenshot-1-after-click');
        cy.get('button[data-test-button="sign-in"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/dashboard')
        cy.screenshot('screenshot-1-after-click');
    })
    it('Test Wrong user or password', () => {
        console.log("test para subss")
        cy.wait(1000)
        cy.get('input#identification').type('bc.castro@uniandes.edu.co')
        cy.wait(2000)
        cy.screenshot('screenshot-1-after-click');
        cy.get('input#password').type('Aslan')
        cy.wait(2000)
        cy.screenshot('screenshot-1-after-click');
        cy.get('button[data-test-button="sign-in"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/signin')
        cy.screenshot('screenshot-1-after-click');
    })
})
