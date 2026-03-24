//Handlind the error event in EventEmitter
const EventEmitter = require("events");

const fileEmitter = new EventEmitter();

//register an error listemer 
fileEmitter.on("error",function(errorMessage){
    console.log("emitter handler error ",errorMessage);
});

//Normal event Listener:Happy scenario
fileEmitter.on("fileProcessed",function(fileName){
    console.log("File processed succesfully ",fileName);
});

fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","File processed failed.");