// Parsing JSON request bodies
const http = require("http");
const server = http.createServer(function(req,res){
    if(req.method === "POST" && req.url === "/api/users"){
        let body = "";
        req.on("data", function(chunk){
            body+=chunk.toString();
        });
        req.on("end",function(){
            try{
                const parsed = JSON.parse(body);
                res.writeHead(201,{"content-type":"application/json"});
                res.end(JSON.stringify({
                    success:true,
                    recevied:parsed
                }));
            }
            catch(error){
                res.writeHead(400,{"Content-Type":"application-json"});
                res.end(JSON.stringify({
                    success:false,
                    recevied:parsed,
                    message:"Invalid JSON body"
                }));

            }
            return;

        });
    }
     
  res.writeHead(404, { 'Content-Type': 'application/json' }); 
  res.end(JSON.stringify({success: false, message: 'Not Found or Method Not Allowed'})); 
}); 

server.listen(3006, () => { 
  console.log('Server running on http://localhost:3006/'); 
});
