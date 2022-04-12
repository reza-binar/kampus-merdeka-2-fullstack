const express = require("express"); // Import express

const Book = require("./Book");

const port = process.env.PORT || 8000; // Set port
const app = express(); // Create an instance of express

/* It will activate request body (JSON) */
app.use(express.json());

/* All endpoint below this code */
// POST /books (Create Book)
app.post("/api/v1/books", (req, res) => {
  const book = Book.create(req.body);
  res.status(201).json(book);
});

// GET /books (List Books)
app.get("/api/v1/books", (req, res) => {
  const books = Book.list();
  res.status(200).json(books);
});

// GET /books/:id (Find Book)
app.get("/api/v1/books/:id", (req, res) => {
  const book = Book.find(req.params.id);
  if (!book) return res.status(404).json(null);
  res.status(200).json(book);
});

// PUT /books/:id (Update Book)
app.put("/api/v1/books/:id", (req, res) => {
  const book = Book.update(req.params.id, req.body);
  if (!book) return res.status(404).json(null);
  res.status(200).json(book);
});

// DELETE /books/:id (Delete Book)
app.delete("/api/v1/books/:id", (req, res) => {
  const book = Book.delete(req.params.id);
  if (!book) return res.status(404).json(null);
  res.status(200).json(book);
});

/* Run the server */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
