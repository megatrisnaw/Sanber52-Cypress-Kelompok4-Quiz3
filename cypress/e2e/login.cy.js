import Navigation from '../support/pageObject/Navigation'
describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('')
        cy.contains('Sign In').click();
        cy.clearAllSessionStorage
    });

    it('Verify success login - email and password valid', () => {
        cy.login('megatrisnaww@gmail.com','Asdf1234.');
        cy.wait(500);
        cy.get('.base').should('be.visible');
        cy.wait(500)
    });
    it('Verify failed login - email valid and password invalid', () => {
        cy.login('megatrisnaww@gmail.com','123456789');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });
    it('Verify failed login - email invalid', () => {
        cy.login('user123@gmail.com','123456789');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });    
    it('Verify failed login - email not registered', () => {
        cy.login('megaaa@gmail.com','123456789');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });
    it('Verify success login and show detail account page', () => {
        cy.login('megatrisnaww@gmail.com','Asdf1234.');
        Navigation.visitAccount();
        cy.get('.base').contains("My Account").should('be.visible');
        cy.wait(500)
        cy.get('.current > strong').contains('My Account').click();
        cy.get('.block-dashboard-info > .block-title > strong').contains('Account Information').should('be.visible');
        cy.wait(1000)
    });

});
