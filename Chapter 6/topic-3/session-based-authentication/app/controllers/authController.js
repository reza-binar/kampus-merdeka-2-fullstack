/**
 * @file contains authentication request handler and its business logic
 * @author Fikri Rahmat Nurhidayat
 */

const bcrypt = require("bcryptjs");
const { User } = require("../models");
const SALT = 10;

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (!!err) {
        reject(err);
        return;
      }

      resolve(encryptedPassword);
    });
  });
}

function checkPassword(encryptedPassword, password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (!!err) {
        reject(err);
        return;
      }

      resolve(isPasswordCorrect);
    });
  });
}

module.exports = {
  async login(req, res) {
    const email = req.body.email.toLowerCase(); // Biar case insensitive
    const password = req.body.password;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(404).send("Email tidak ditemukan");
      return;
    }

    const isPasswordCorrect = await checkPassword(
      user.encryptedPassword,
      password
    );

    if (!isPasswordCorrect) {
      res.status(401).send("Password salah!");
      return;
    }

    req.session.isAuthenticated = true;
    req.session.user = user;
    res.redirect("/")
  },

  async logout(req, res) {
    req.session.destroy()
    res.redirect("/login")
  },

  authorizedOnly(req, res, next) {
    if (!req.session.isAuthenticated) {
      res.redirect("/login");
      return;
    }

    next();
  },
  
  publicOnly(req, res, next) {
    if (!req.session.isAuthenticated) {
      next();
      return;
    }
    
    res.redirect("/")
  },
};
