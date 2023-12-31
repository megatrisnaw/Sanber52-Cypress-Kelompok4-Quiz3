// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
    Cypress.Commands.add('login',(email,pass) => {
        cy.contains('Sign In').click();
        cy.get('#email').type(email);
        cy.get('#pass').type(pass);
        cy.get('#send2').click();
    })
    Cypress.Commands.add('beliKaos',() => {
        cy.get('#option-label-size-143-item-168').click();
        cy.wait(500);
        cy.get('#option-label-color-93-item-50').click();
        cy.wait(300);
        cy.get('#product-addtocart-button').click();
        cy.wait(500)
    })
    Cypress.Commands.add('beliDuaKaos',() => {
        cy.get('#option-label-size-143-item-168').click();
        cy.wait(500);
        cy.get('#option-label-color-93-item-50').click();
        cy.wait(100);
        cy.get('#qty').clear();
        cy.get('#qty').type('2');
        cy.get('#product-addtocart-button').click();
        cy.wait(500)
    }) 
    Cypress.Commands.add('beliJaket',() => {
        cy.get('#option-label-size-143-item-166').click();
        cy.wait(500);
        cy.get('#option-label-color-93-item-52').click();
        cy.wait(300);
        cy.get('#product-addtocart-button').click();
        cy.wait(500);
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })