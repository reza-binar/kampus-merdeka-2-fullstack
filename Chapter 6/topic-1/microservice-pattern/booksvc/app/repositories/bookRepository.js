const { Book } = require("../models")

module.exports = {
  find(id) {
    return Book.findByPk(id)
  }
}
