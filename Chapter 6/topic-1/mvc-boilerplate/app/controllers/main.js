/**
 * @file contains function that handle trivial request
 * @author Fikri Rahmat Nurhidayat
 */

module.exports = {
  index(req, res) {
    res.status(200).render("index");
  },

  onLost(req, res) {
    res.status(404).render("404", {
      url: req.url,
    });
  },

  onError(err, req, res, next) {
    res.status(500).render("500", {
      name: err.name,
      message: err.message,
    });
  },
};
