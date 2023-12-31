import addressData from '../fixtures/addressData.json';
import userData from '../fixtures/userData.json'

describe('Update Address', () => {
    beforeEach(() => {
        cy.visit('');
        cy.contains('Sign In').click();
        cy.login('testing__1234@gmail.com','Testing123');
        cy.wait(600);
        cy.visit('/customer/address/edit/');
    });

    it.only('Update Profile with Valid Address', () => {
        cy.get('#firstname').clear().should('have.value', '')
        cy.get('#firstname').type(userData.validUser.firstName)
        cy.get('#lastname').clear().should('have.value', '')
        cy.get('#lastname').type(userData.validUser.lastName)
        cy.get('#company').type(addressData.validAddress.company)
        cy.get('#telephone').type(addressData.validAddress.telephone)
        cy.get('#street_1').type(addressData.validAddress.street_1)
        cy.get('#city').type(addressData.validAddress.city)
        cy.get('#country').should('have.value', 'US')
        cy.get('#country').select(addressData.validAddress.country)
        cy.get('#region').type(addressData.validAddress.province)
        cy.get('#zip').type(addressData.validAddress.zip)
        cy.wait(500)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.wait(500)
        cy.get('.message-success > div').should('be.visible')
        cy.wait(500)
    })
    
    it('Update Profile with Invalid Address', () => {
        cy.get('#firstname').clear().should('have.value', '')
        cy.get('#lastname').clear().should('have.value', '')
        cy.get('#company').type(addressData.invalidAddress.company)
        cy.get('#telephone').type(addressData.invalidAddress.telephone)
        cy.get('#street_1').type(addressData.invalidAddress.street_1)
        cy.get('#city').type(addressData.invalidAddress.city)      
        cy.get('#country').should('have.value', 'US')
        cy.get('#country').select(addressData.invalidAddress.country)
        cy.get('#region').type(addressData.invalidAddress.province)       
        cy.get('#zip').type(addressData.invalidAddress.zip)      
        cy.wait(500)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('#firstname-error').should('be.visible')
        cy.get('#lastname-error').should('be.visible')
        cy.get('#telephone-error').should('be.visible')
        cy.get('#street_1-error').should('be.visible')
        cy.get('#city-error').should('be.visible')
        cy.get('#region-error').should('be.visible')
        cy.get('#zip-error').should('be.visible')
        cy.get('.control > .message')
        cy.wait(500)
    })
});
