const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.REQRES_API_KEY = process.env.REQRES_API_KEY;
      return config;
    },
  },
  reporter: 'mochawesome', 
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false
  }
});