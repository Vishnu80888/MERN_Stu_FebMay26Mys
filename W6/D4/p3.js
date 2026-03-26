// Inspecting request details in an HTTP sever

const http = require("http");

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers
    res.writeHead(200,{"content-type":"text/plain"});
    //end() sends the response body and closes the response 
    // req.method tells the Http mothod ,(GET && POST )
    res.end("Method :" +req.method+"\nURL:"+req.url);
});
server.listen(3001,function(){
    console.log("sever is running at http://localhost:3001");
});