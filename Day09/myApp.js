// First part - 1

// const http = require("http");

// const server = http.createServer((request, response) => {
//   response.write("Hello world from myApp. ");
//   response.end();
// });

// server.listen(4500);

// ----------------------------------------------------------

// Part 2:

// const http = require("http");
// const PORT = 4500;

// const server = http.createServer((request, response) => {
//   response.write("Hello world from myApp. ");
//   response.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on prt ${PORT}`);
// });

// ------------------------------------------------------------------------

// Part 3:

// const http = require("http");
// const PORT = 4500;

// const server = http.createServer((request, response) => {
//   var x = 10;
//   var y = 20;
//   var z = x + y;
//   response.write(`The sum of ${x} and ${y} is = ` + z);

//   response.write("\n Hello world from myApp. ");
//   response.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on prt ${PORT}`);
// });

// -----------------------------------------------------------

// Part 4:

// const http = require("http");
// const firstModule = require("./firstModule.js");

// const PORT = 4500;

// const server = http.createServer((request, response) => {
//   var x = 10;
//   var y = 20;
//   var z = firstModule.sum(x, y);
//   response.write(`The sum of ${x} and ${y} is = ` + z);

//   response.write("\n Hello world from myApp. ");
//   response.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on prt ${PORT}`);
// });

// --------------------------------------------------------

// Part 5:

const http = require("http");
const firstModule = require("./firstModule.js");

const PORT = 4500;

const server = http.createServer((request, response) => {
  var x = 10;
  var y = 20;
  var z = firstModule.sum(x, y);
  response.write(`The sum of ${x} and ${y} is = ` + z);

  response.write("\n Hello world from myApp. ");
  response.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on prt ${PORT}`);
});
