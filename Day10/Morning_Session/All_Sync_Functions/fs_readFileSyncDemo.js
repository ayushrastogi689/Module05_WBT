// Synchronous approach

const fs = require("fs");

console.log("Before reading the file.");

const data = fs.readFileSync("synchronous.txt");
console.log(data.toString());
console.log("After reading file");
