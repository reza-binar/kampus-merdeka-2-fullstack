const authorService = require("../../../services/authorService")

module.exports = {
  get(req, res) {
    authorService.get(req.params.id)
      .then((author) => {
        res.status(200).json({
          status: "OK",
          data: author,
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
