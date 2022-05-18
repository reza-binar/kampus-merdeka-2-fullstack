const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/v1/auth/login", (req, res) => {
  const token = jwt.sign({ id: 1, email: req.body.email }, "Rahasia");
  res.status(201).json({ token });
});

app.listen(3001, () => {
  console.log("Listening on port", 3001);
});
