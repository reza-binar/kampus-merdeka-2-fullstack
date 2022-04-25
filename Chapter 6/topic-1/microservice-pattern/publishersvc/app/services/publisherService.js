const publisherRepository = require("../repositories/publisherRepository")

module.exports = {
  get(id) {
    return publisherRepository.find(id)
  }
}
