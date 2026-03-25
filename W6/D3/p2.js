// Reading &&  Writing files synchronously(Execution will be one after another)

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"sync-note.txt");

// fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous oparation block exection");

//Append to a File 
fs.appendFile(filePath,"New text added using fs.append file",
    function(error){
        if(error){
            console.log("Append error;",error.message);
            return;
        }
        console.log("File content appended");
    });



console.log("file written  synchronously.");

const content = fs.readFileSync(filePath,"utf-8");

console.log("file read synchronosly");
console.log("file content:",content);