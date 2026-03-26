// Parsing query parameters 
const http = require('http'); 
const { URL } = require('url'); // 'url' module is correct here

const server = http.createServer(function (req, res) { 
  const fullUrl = new URL(req.url, 'http://localhost:3006/'); 
  // Corrected variable name and capitalization

  if (req.method === 'GET' && fullUrl.pathname === '/search') { 
    // 'GET' must be uppercase string, strict equality
    const term = fullUrl.searchParams.get('term'); 
    // Corrected property name 'searchParams'
    const page = fullUrl.searchParams.get('page'); 
    
    res.writeHead(200, {'Content-Type': 'application/json'}); 
    // Corrected header key capitalization and quotes
    res.end(JSON.stringify({ route: '/search', term: term, page: page })); 
    return; 
  } 
  
  res.writeHead(404, { 'Content-Type': 'application/json' }); 
  // Corrected header key capitalization and quotes
  res.end(JSON.stringify({success: false, message: 'Not Found or Method Not Allowed'})); 
}); 

server.listen(3006, () => { 
  console.log('Server running on http://localhost:3006/'); 
});
