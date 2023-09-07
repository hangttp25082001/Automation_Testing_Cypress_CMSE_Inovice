const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pipt8a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
},
{
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
}
);
