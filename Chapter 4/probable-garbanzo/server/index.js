const http = require("http"); // import http module
const fs = require("fs"); // import file system module
const path = require("path"); // import part module
const mime = require("mime"); // import mime module

const { PORT = 8000 } = process.env; // make port for server
const PUBLIC_DIRECTORY = path.join(__dirname, "..", "public"); // set public directory

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
  if (req.url === "/") {
    const html = getHTML("index.example.html"); // get html file
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.url.match(".css$") || req.url.match(".js$")) {
    const filePath = path.join(__dirname, "..", "public", req.url);
    const fileStream = fs.createReadStream(filePath, "UTF-8");
    const mimeType = mime.getType(filePath); // get mime type
    res.writeHead(200, { "Content-Type": mimeType });
    fileStream.pipe(res);
  } else if (req.url.match(".jpg$")) {
    const filePath = path.join(__dirname, "..", "public", req.url);
    const fileStream = fs.createReadStream(filePath);
    const mimeType = mime.getType(filePath); // get mime type
    res.writeHead(200, { "Content-Type": mimeType });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("No Page Found");
  }
}

/* This syntax is to create server */
const server = http.createServer(onRequest);

/* This syntax is to run the server */
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT}`);
});
