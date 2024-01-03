class Navigation {
  visitHomepage() {
    cy.visit("https://magento.softwaretestingboard.com");
  }
  visitAccount() {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/");
  }
  visitHoodie() {
    cy.visit("https://magento.softwaretestingboard.com/hero-hoodie.html");
  }
}
export default new Navigation();
