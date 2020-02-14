const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(502, { 'Content-Type': 'text/plain' });
  res.end('break all the things');
});

server.listen(7777);
