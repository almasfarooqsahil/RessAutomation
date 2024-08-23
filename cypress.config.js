const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "RESS-Report",
      "overwrite": false,
      "html": true,
      "json": false
    },
  

  e2e: {
      setupNodeEvents(on, config) {
        on('before:run', async (details) => {
          console.log('override before:run');
          await beforeRunHook(details);
        });
  
        on('after:run', async () => {
          console.log('override after:run');
          await afterRunHook();
        });
    },
    baseUrl: "https://ress-qa.loebigink.com",
    viewportWidth: 1280,
    defaultCommandTimeout: 10000,
  },
});
