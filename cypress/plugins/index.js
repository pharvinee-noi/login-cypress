// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const fs = require("fs-extra");
const path = require("path");
require("mysql");

function getConfigurationByFile() {
  const ENV_CONFIG_FILE = path.resolve("cypress", "configs", `EnvConfig.json`);

  return fs.readJson(ENV_CONFIG_FILE);
}

module.exports = (on, config) => {

  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(["tsify"]);
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("file:preprocessor", cucumber(options));
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });

};
