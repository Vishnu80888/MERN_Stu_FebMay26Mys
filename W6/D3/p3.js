// Reading and writing files asynchronously with callbacks
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"async-note.txt");

//to write to a file 
fs.writeFile(
    filePath,"This is Written asynchronous using wryeFile()..",function(writeError){
        if(writeError){
            console.log("Write Error : ",writeError.message);
            return;
        }
        console.log("file written  asynchronously.");
    }
)
fs.readFile(filePath,"utf-8",function(readError,content){
    if(readError){
        console.log("Read error :",readError.message);
        return;
    }
    console.log(content);
});
console.log("Script continues while opearations are in progress")
