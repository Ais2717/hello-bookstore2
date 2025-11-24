const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/books') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([
      { title: "Clean Code", author: "Robert C. Martin" },
      { title: "The Pragmatic Programmer", author: "Andrew Hunt" }
    ]));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello from Bookstore!");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
