const fs = require("fs");

fs.readFile("myFile.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    //data is by default the stream object,
    // it will carry your file data in bytes.

    console.log(data);
    console.log(data.toString());
  }
});
