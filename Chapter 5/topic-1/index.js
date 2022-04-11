const express = require("express"); // Import express
const app = express(); // Create an instance of express

// Get port from environment (default 8000)
const PORT = process.env.PORT || 8000;
const BOOK_MSG = `Thank you for adding book into the database.`;

function isAdmin(req, res, next) {
  if (req.query.iam === "admin") {
    next();
    return;
  }

  res.status(401).send("You are not admin");
}

// To activate req.body
app.use(express.urlencoded());

/* If client access (GET) http://localhost:8000 or http://localhost:8000/, it will go to this function */
app.get("/", (req, res) => {
  res.render("index.ejs", {
    name: req.query.name || "Guest",
  });
});

/* If client access (GET) http://localhost:8000/api/v1/books/:id */
app.get("/api/v1/books/:id", isAdmin, (req, res) => {
  console.log(req.params);
  res.send(`You requested the book with id ${req.params.id}`);
});

/* If client access (GET) http://localhost:8000/api/v1/books */
app.get("/api/v1/books", isAdmin, (req, res) => {
  console.log(req.query);
  res
    .status(200)
    .send(`You requested all books that written by ${req.query.author}`);
});

// If client access (POST) http://localhost:8000/api/v1/books
app.post("/api/v1/books", isAdmin, (req, res) => {
  console.log(req.body);
  res.status(201).send(BOOK_MSG);
});

/* This syntax is to run the server with port 8000 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
