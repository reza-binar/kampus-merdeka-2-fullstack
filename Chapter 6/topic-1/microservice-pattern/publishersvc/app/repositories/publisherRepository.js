const { Publisher } = require("../models")

module.exports = {
  find(id) {
    return Publisher.findByPk(id)
  }
}
