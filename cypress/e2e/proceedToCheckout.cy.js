// Proceed to Checkout'


describe('Proceed to Checkout Functionality', () => {
    beforeEach(() => {
        cy.visit('');
        cy.contains('Sign In').click();
        cy.login('xyz@yahoo.com','Top@z9901');
        cy.wait(600);
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html');
        cy.wait(1500);
        cy.clearAllSessionStorage
    });
    

    it('Proses Checkout Sukses 1 Barang', () => {
        cy.beliKaos();
        //cy.get('#option-label-size-143-item-167').click();
        //cy.wait(500);
        //cy.get('#option-label-color-93-item-50').click();
        //cy.wait(300);
        //cy.get('#product-addtocart-button').click();
        //cy.wait(500);
        cy.visit('https://magento.softwaretestingboard.com/checkout/');
        cy.wait(10000);
        cy.get('.button').click();
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
        cy.get('.base').should('have.text','Thank you for your purchase!')                       
    })
    it('Proses Checkout Sukses 2 Barang Yang Sama', () => {
        cy.wait(500);
        cy.beliDuaKaos();
        //cy.get('#option-label-size-143-item-166').click();
        //cy.wait(500);
        //cy.get('#option-label-color-93-item-50').click();
        //cy.wait(100);
        //cy.get('#qty').clear();
        //cy.get('#qty').type('2');
        //cy.get('#product-addtocart-button').click();
        //cy.wait(500);
        cy.visit('https://magento.softwaretestingboard.com/checkout/');
        cy.wait(10000);
        cy.get('.button').click();
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
        cy.get('.base').should('have.text','Thank you for your purchase!')                      
    })
    it('Proses Checkout Sukses 2 Barang Berbeda', () => {
        cy.beliKaos();
        //cy.get('#option-label-size-143-item-167').click();
        //cy.wait(500);
        //cy.get('#option-label-color-93-item-50').click();
        //cy.wait(300);
        //cy.get('#product-addtocart-button').click();
        //cy.wait(500);
        cy.visit('https://magento.softwaretestingboard.com/phoebe-zipper-sweatshirt.html');
        cy.wait(300);
        cy.beliJaket();
        //cy.get('#option-label-size-143-item-166').click();
        //cy.wait(500);
        //cy.get('#option-label-color-93-item-52').click();
        //cy.wait(300);
        //cy.get('#product-addtocart-button').click();
        //cy.wait(500);
        cy.visit('https://magento.softwaretestingboard.com/checkout/');
        cy.wait(10000);
        cy.get('.button').click();
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
        cy.get('.base').should('have.text','Thank you for your purchase!')
    })
});