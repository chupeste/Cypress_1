const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ggzm3g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
    "viewportWidth": 1500,
    "viewportHeight": 900,
    "chromeWebSecurity": false,

  //"testFiles": "**/*.feature"
});
