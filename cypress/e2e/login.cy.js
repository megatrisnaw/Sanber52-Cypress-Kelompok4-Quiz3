import loginPage from '../support/pageObject/login.page';
const userData = require('../fixtures/userData.json')

describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('')
        cy.contains('Sign In').click();
        cy.clearAllSessionStorage
    });

    it('Verify success login - email and password valid', () => {
        cy.login('megatrisnaww@gmail.com','Asdf1234.');
        cy.wait(1000);
        cy.get('.base').should('be.visible');
        cy.wait(500)
    });
    it('Verify failed login - email valid and password invalid', () => {
        cy.login('megatrisnaww@gmail.com','123456789');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });
    it('Verify failed login - email not registered', () => {
        cy.login('megaaa@gmail.com','123456789');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });
    it.only('Verify failed login - fixtures', () => {
        cy.login('megaaa@gmail.com','123456789');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });
});