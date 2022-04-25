const publisherService = require("../../../services/publisherService")

module.exports = {
  get(req, res) {
    publisherService.get(req.params.id)
      .then((publisher) => {
        res.status(200).json({
          status: "OK",
          data: publisher,
        })
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        })
      })
  }
}
