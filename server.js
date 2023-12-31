const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Specify the path to the file you want to serve
  const filePath = path.join(__dirname, 'access_token.txt');
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Read the contents of the file and send as response
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      console.error('Error reading the file:', err);
    } else {
      const headers = res.headers;
      console.log(headers);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

const PORT = 3000; // You can change this to the port you prefer
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

