class Navigation {
    visitHomepage() {
        cy.visit('https://magento.softwaretestingboard.com/');
    }
    visitAccount() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/');
    }
}
export default new Navigation();