// Sending message by stringify by api

const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/api/status" && req.method === "GET") {
    const responseData = {
        success:true,
        message:"API is Working",
        server:"NodeJS HTTP module"
    };

    //JSON responses using application/json
    res.writeHead(200,{"content-type":"application/json"});
    //JSON.stringify() convents JS object into a JSON string
    res.end(JSON.stringify(responseData));
    return;
  }
            res.writeHead(404, { "Content-Type":"application/json" });
            res.end(JSON.stringify({success:false,message:"Not Found or Method Not Allowed"}));
    
});
server.listen(3002, () => {
  console.log("Server running on http://localhost:3002/");
});