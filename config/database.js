const path = require("path");
const DB_DEVELOPMENT_FILE_PATH = path.join(
  __dirname,
  "../db/development.sqlite"
);
const DB_TEST_FILE_PATH = path.join(__dirname, "../db/test.sqlite");
const DB_PRODUCTION_FILE_PATH = path.join(__dirname, "../db/production.sqlite");

module.exports = {
  development: {
    storage: DB_DEVELOPMENT_FILE_PATH,
    dialect: "sqlite",
  },
  test: {
    storage: DB_TEST_FILE_PATH,
    logging: false,
    dialect: "sqlite",
  },
  production: {
    storage: DB_PRODUCTION_FILE_PATH,
    dialect: "sqlite",
  },
};
