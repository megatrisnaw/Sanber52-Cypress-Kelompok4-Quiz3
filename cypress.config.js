const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 680,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false
  },
});
