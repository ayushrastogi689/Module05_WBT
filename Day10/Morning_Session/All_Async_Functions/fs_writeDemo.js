const fs = require("fs");

fs.writeFile("notes.txt", "Write into file demo in Node.js", (error) => {
  if (error) {
    console.log(error);
  } else {
    //data is by default the stream object,
    // it will carry your file data in bytes.

    console.log("Data saved into the file.");
  }
});
