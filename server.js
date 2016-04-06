var http = require('http');
var dispatcher = require("httpdispatcher");

var hostname = '127.0.0.1';
var port = 8000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});