const bookService = require("../../../services/bookService")

module.exports = {
  get(req, res) {
    bookService.get(req.params.id)
      .then((book) => {
        res.status(200).json({
          status: "OK",
          data: book,
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
