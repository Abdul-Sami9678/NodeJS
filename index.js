const http = require('http');
http.createServer((req,resp)=>
{
    resp.write("<h1>Hello This Is Sami Khan</h1>");
    resp.end();
}).listen(4500);