// Import the HTTP and FS modules
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 4000;

const someName = (name) => {
    console.log("Your Name is " + name);
};

someName("Elli Steinbrecher");

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        fs.readFile('./public/home.html', (error, content) => {
            if (error) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error: Unable to load home.html');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(content);
            }
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error: Page not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
