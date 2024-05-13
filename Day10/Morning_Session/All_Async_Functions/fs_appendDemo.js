const fs = require("fs");

fs.appendFile("notes.txt", "\nSecond line appended in Notes.", (error) => {
  if (error) {
    console.log(error);
  } else {
    //data is by default the stream object,
    // it will carry your file data in bytes.

    console.log("Appended Data and saved into the file.");
  }
});

// readFile(), writeFile(), appendFile() are async functions
