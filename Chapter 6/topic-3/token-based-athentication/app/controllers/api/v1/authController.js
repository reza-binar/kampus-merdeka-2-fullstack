/**
 * @file contains authentication request handler and its business logic
 * @author Fikri Rahmat Nurhidayat
 */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../../models");
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

/* Create token function */
function createToken(data) {
  return jwt.sign(data, process.env.JWT_SECRET || "secret", {
    expiresIn: 5 * 60,
  });
}

/* Verify token function */
function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET || "secret");
}

module.exports = {
  async register(req, res) {
    const email = req.body.email;
    const encryptedPassword = await encryptPassword(req.body.password);
    const user = await User.create({ email, encryptedPassword });
    res.status(201).json({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  },

  async login(req, res) {
    const email = req.body.email.toLowerCase(); // Biar case insensitive
    const password = req.body.password;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: "Email tidak ditemukan" });
      return;
    }

    const isPasswordCorrect = await checkPassword(
      user.encryptedPassword,
      password
    );

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Password salah!" });
      return;
    }

    // Create token
    const token = createToken({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });

    // Return token and some information
    res.status(201).json({
      id: user.id,
      email: user.email,
      token,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  },

  /* Authorize middleware */
  async authorize(req, res, next) {
    try {
      const bearerToken = req.headers.authorization; // Take bearer token from request header
      const token = bearerToken.split("Bearer ")[1]; // Split bearer token from Bearer string
      const tokenPayload = verifyToken(token); // Verify token and get payload

      req.user = JSON.parse(
        JSON.stringify(await User.findByPk(tokenPayload.id))
      ); // Get user from database by id of payload
      delete req.user.encryptedPassword; // Delete encrypted password from user object

      next(); // Continue to next middleware
    } catch (error) {
      // If token expired
      if (error.message.includes("jwt expired")) {
        res.status(401).json({ message: "Token expired" });
        return;
      }

      // If error, return error
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  },

  // To know who is the user
  async whoAmI(req, res) {
    res.status(200).json(req.user);
  },
};
