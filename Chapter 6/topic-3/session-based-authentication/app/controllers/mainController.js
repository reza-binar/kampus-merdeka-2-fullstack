module.exports = {
  index(req, res) {
    res.render("index.ejs", {
      user: req.session.user,
    })
  },

  login(req, res) {
    res.render("login.ejs")
  },
}
