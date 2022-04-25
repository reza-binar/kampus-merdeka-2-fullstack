const fs = require("fs");

let textReaded = "";

// Read file amara.txt
fs.readFile("./files/amara.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  textReaded = data;
  // Read file khansa.txt
  fs.readFile("./files/khansa.txt", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    textReaded = textReaded + "\n" + data;
    // Read file rizal.txt
    fs.readFile("./files/rizal.txt", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      textReaded = textReaded + "\n" + data;
      // Write file result.txt
      fs.writeFile("./files/result.txt", textReaded, (err) => {
        if (err) {
          throw err;
        }
        console.log("File created");
      });
    });
  });
});

console.log("Trying....");
