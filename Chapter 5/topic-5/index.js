const express = require("express"); // Import express module

const app = express(); // Create an instance of express
const { Article } = require("./models"); // Import Article model

const PORT = process.env.PORT || 8000; // Set port

app.use(express.json()); // Parse incoming JSON data

// GET /articles - Get all articles
app.get("/api/v1/articles", async (req, res) => {
  try {
    const articles = await Article.findAll(); // Find all articles
    res.status(200).json(articles); // Send response
  } catch (error) {
    res.status(500).json({ error: "Can not get all articles" });
  }
});

// Get /articles/:id - Get article by id
app.get("/api/v1/articles/:id", async (req, res) => {
  try {
    // Find article by id
    const article = await Article.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(article); // Send response
  } catch (error) {
    res.status(500).json({ error: "Can not get article" });
  }
});

// POST /articles - Create an article
app.post("/api/v1/articles", (req, res) => {
  Article.create(req.body)
    .then((article) => {
      res.status(201).json(article);
    })
    .catch((error) => {
      res.status(500).json({ error: "Can not create an article" });
    });
});

// PUT /articles/:id - Update an article
app.put("/api/v1/articles/:id", async (req, res) => {
  try {
    // Find article by id
    const article = await Article.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.status(200).json(article[1][0]); // Send response
  } catch (error) {
    res.status(500).json({ error: "Can not update an article" });
  }
});

// DELETE /articles/:id - Delete an article
app.delete("/api/v1/articles/:id", async (req, res) => {
  try {
    // Find article by id
    const article = await Article.destroy({
      where: { id: req.params.id },
    });
    res
      .status(200)
      .json({ message: `Article with id ${req.params.id} deleted` }); // Send response
  } catch (error) {
    res.status(500).json({ error: "Can not delete an article" });
  }
});

// Run the server on 8000 port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
