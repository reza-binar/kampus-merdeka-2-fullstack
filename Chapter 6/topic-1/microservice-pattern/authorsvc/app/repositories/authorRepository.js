const { Author } = require("../models")

module.exports = {
  find(id) {
    return Author.findByPk(id)
  }
}
