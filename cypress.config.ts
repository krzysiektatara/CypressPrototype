import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    username: 'Administrator'
  },
  e2e: {
      baseUrl: 'http://enova365.internal/',
      "video": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
