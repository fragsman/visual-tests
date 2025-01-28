const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",

    retries: {
      runMode: 1,
      openMode: 0
    }
  }
});


require('@applitools/eyes-cypress')(module);
