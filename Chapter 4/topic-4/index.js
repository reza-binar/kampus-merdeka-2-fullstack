const http = require("http"); // import http module
const fs = require("fs"); // import file system module
const path = require("path"); // import part module

const { PORT = 8000 } = process.env; // make port for server
const people = require("./data/people.json");
const PUBLIC_DIRECTORY = path.join(__dirname, "public"); // set public directory

/* function to read html file in the public directory */
function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName); // set html file path
  return fs.readFileSync(htmlFilePath, "utf-8"); // read html file
}

/* 
  when client request to http://localhost:8000
  the function will be called
*/
function onRequest(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(getHTML("index.html"));
      return;
    case "/about":
      res.writeHead(200);
      res.end(getHTML("about.html"));
      return;
    case "/api/v1/people":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(people));
      return;
    default:
      res.writeHead(404);
      res.end(getHTML("404.html"));
      return;
  }
}

/* This syntax is to create server */
const server = http.createServer(onRequest);

/* This syntax is to run the server */
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT}`);
});
