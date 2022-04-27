/**
 * @file contains entry point of controllers module
 * @author Fikri Rahmat Nurhidayat
 */

const api = require("./api");
const authController = require("./authController")
const mainController = require("./mainController")

module.exports = {
  api,
  authController,
  mainController,
};
