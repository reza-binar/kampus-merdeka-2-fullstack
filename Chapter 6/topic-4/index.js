const express = require("express"); // Import express
const yaml = require("yamljs"); // Import yaml
const redoc = require("redoc-express"); // Import redoc

const app = express(); // Create express app
const swaggerDocument = yaml.load("./openapi.yaml"); // Load swagger document
const port = 3000; // Set port

// Serve your swagger.json
app.get("/docs/swagger.json", (req, res) => {
  res.status(200).json(swaggerDocument);
});

// Serve redoc
app.get(
  "/docs",
  redoc({
    title: "API Documentation",
    specUrl: `/docs/swagger.json`,
  })
);

// Set index endpoint
app.listen(port, () => console.log(`Listening on port ${port}`));
