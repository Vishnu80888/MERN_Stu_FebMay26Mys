//Usage of built-in and third-party modules

//path is a built-in madule, So it works without installation 
const path = require("path");

const invoicePath = path.join("invoice","2026","invoice_001.text");
console.log("Built-in module result: ",invoicePath);

//To use Third party package/module 
try{
    const _ =require("ladas");
    console.log("Third-party module example");
}
catch(error){
    console.log("Third party module 'ladash' is not installed");
}