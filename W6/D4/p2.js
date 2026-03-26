// Creating simple http sever
const http = require("http");

// createSever(): Creates a HTTP sever instance
// Accepts a callback with two important object:
// 1. req: incoming request details
// 2. res: outgoing response control 

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers
    res.writeHead(200,{"content-type":"text/plain"});
    //end() sends the response body and closes the response 
    res.end("Hello from NodeJS HTTP sever..");
});

// listen() binds the sever to a port and starts accepting requests
server.listen(3000,function(){
    console.log("sever is running at http://localhost:3000");
});