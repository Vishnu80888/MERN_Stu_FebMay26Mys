// UnderStanding Path modules and JS module

const path = require("path");
const appConfig = require("./support/app-config.json");


//JSON is loaded as a normal JS object in CommonJS
console.log("__dirname:",__dirname);
console.log("__filename:",__filename);

console.log("Application name:",appConfig.appName);
console.log("Environment :",appConfig.environment);
console.log("features:",appConfig.features.join(", "));//join for make items that array into list or normal text
