//Introduction to node.js File system (fs) Module ,Built-in module
const fs = require("fs");
const fsPromise = require("fs/promises");

console.log("Type of fs.readFile :",typeof fs.readFile);
console.log("Type of fs.writeFile :",typeof fs.writeFile);

//fsPromise
console.log("Type of fsPrmoise.readFile :",typeof fsPromise.readFile);

console.log("Type of fsPromise.writeFile :",typeof fsPromise.writeFile);
