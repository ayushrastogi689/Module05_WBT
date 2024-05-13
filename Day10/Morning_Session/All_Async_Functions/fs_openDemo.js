const fs = require("fs");

fs.open("data.txt", "w", (error, file) => {
  if (error) {
    console.log(error);
  } else {
    //data is by default the stream object,
    // it will carry your file data in bytes.

    console.log(" File created.");
    console.log(file); // -> This will give Output as an Integer.
    // Thsi integer is a file descriptor and used to handle a file.
  }
});

// readFile(), writeFile(), appendFile(), open() are async functions
