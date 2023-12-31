// Create an Account
import regisData from '../fixtures/regisData.json'
import userData from '../fixtures/userData.json'

describe('Register Functionality', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get('.panel > .header > :nth-child(3) > a').click();
        cy.clearAllSessionStorage
    });

    it('Verify success register - All Data Valid', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get(regisData.first).type(userData.validUser.firstName);
        cy.get(regisData.last).type(userData.validUser.lastName);
        cy.get(regisData.email).type(randomEmail);
        cy.get(regisData.paswd).type(userData.validUser.password);
        cy.get(regisData.paswdConfirm).type(userData.validUser.password);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('.message-success > div')
            .should('contain', "Thank you for registering with Main Website Store.");
    });

    it('Verify failed register - Email invalid', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}`;
        cy.get(regisData.first).type(userData.invalidUser4.firstName);
        cy.get(regisData.last).type(userData.invalidUser4.lastName);
        cy.get(regisData.email).type(randomEmail);
        cy.get(regisData.paswd).type(userData.invalidUser4.password);
        cy.get(regisData.paswdConfirm).type('differentpassword');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('#email_address-error')
            .should('contain', "Please enter a valid email address (Ex: johndoe@domain.com).")
    });
});