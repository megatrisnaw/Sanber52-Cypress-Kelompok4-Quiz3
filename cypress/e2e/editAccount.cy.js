import userData from '../fixtures/userData.json'

describe('Update Address', () => {
    beforeEach(() => {
        cy.visit('');
        cy.contains('Sign In').click();
        cy.login('yewep97190@watrf.com', 'Asdf1234.');
        cy.wait(300);
        cy.visit('/customer/account/edit/');
    });

    it('Update Profile with Valid Account', () => {
        cy.get('#firstname').clear().should('have.value', '')
        cy.get('#firstname').type(userData.validUser.firstName)
        cy.get('#lastname').clear().should('have.value', '')
        cy.get('#lastname').type(userData.validUser.lastName)
        cy.get('#change-email').not('[disabled]')
            .check().should('be.checked')
        cy.get('#current-password').type(userData.validUser.currentPassword)
        cy.wait(300)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.wait(300)
        cy.get('.message-success > div').should('be.visible')
        
    })
    
    it('Update Profile with Registered Email', () => {
        cy.get('#firstname').clear().should('have.value', '')
        cy.get('#firstname').type(userData.validUser.firstName)
        cy.get('#lastname').clear().should('have.value', '')
        cy.get('#lastname').type(userData.validUser.lastName)
        cy.get('#change-email').not('[disabled]')
            .check().should('be.checked')
        cy.get('#email').clear().should('have.value', '')
        cy.get('#email').type(userData.validUser.email)
        cy.get('#current-password').type(userData.validUser.currentPassword)
        cy.wait(300)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.wait(300)
        cy.get('.message-error > div').should('be.visible')
    })
})