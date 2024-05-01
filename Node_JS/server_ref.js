// Creating a basic server:

const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');  // NB: Can be ie 'text/plain'. This would render the result as a text instead of html.
    res.end('<h1>Welcome to My Node Js Server</h1><br>Hello, World!\n');
  });


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
// Now access the port 8181, ie localhost:3000 (127.0.0.1:3000) in your browser. This will print Hello World
// NB: The value of the console.log does not display in the browser's console, rather the server terminal