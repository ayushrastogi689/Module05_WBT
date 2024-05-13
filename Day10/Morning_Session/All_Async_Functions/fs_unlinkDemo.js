const fs = require("fs");

fs.unlink("data.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File deleted!");
  }
});
