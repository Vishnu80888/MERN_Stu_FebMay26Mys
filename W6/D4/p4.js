// Handling different GET routes

const http = require("http");

const sever = http.createServer(function(req,res){
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200 ,{"content-type":"text/plain"});
        res.end("Home Page / Dashboard");
        return;
    }
     if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200 ,{"content-type":"text/plain"});
        res.end("About Route, Welcome to About us Page.");
        return;
    }
     if(req.method === "GET" && req.url === "/Products"){
        res.writeHead(200 ,{"content-type":"text/plain"});
        res.end("Products Route, Welcome to Products us Page.");
        return;
    }
        if(req.method === "GET" && req.url === "/Users"){
        res.writeHead(200 ,{"content-type":"text/plain"});
        res.end("Returning all users.");
        return;
    }
    //POST = create   (curl -X POST http://localhost:3001/Users):
    // curl:Client URL :Free ,open src client tool used to transfer data to or from a sever using various network protocol.
          if(req.method === "POST" && req.url === "/Users"){
        res.writeHead(201 ,{"content-type":"text/plain"});
        res.end("NEW USer Created.");
        return;
    }
    // Unknown route fallback
    res.writeHead (404,{"Content-type":"text/plain"});
    res.end("Route noy found.");
});
sever.listen(3001,function(){
    console.log("sever is running at http://localhost:3001");
});