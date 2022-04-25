const authorRepository = require("../repositories/authorRepository")

module.exports = {
  get(id) {
    return authorRepository.find(id)
  }
}
