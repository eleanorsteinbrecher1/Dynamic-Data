// Import necessary modules
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Functions
// Syntax of a function
const someName = (name) => {
    console.log("Your name is " + name);
};
someName("Elli S");

// Function to read and display files
const displayPage = (path, res, status = 200) => {
    res.statusCode = status;
    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path, (error, content) => {
        if (error) {
            res.statusCode = 500;
            res.end("<h1>500 Internal Server Error</h1>");
        } else {
            res.end(content);
        }
    });
};

// Create the server
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.url}`);

    switch (req.url) {
        case "/":
            // Serve home page
            displayPage('./public/home.html', res);
            break;
        case "/about":
            // Serve about page
            displayPage('./public/about.html', res);
            break;
        case "/contact":
            // Serve contact page
            displayPage('./public/contact.html', res);
            break;
        default:
            // Serve 404 error page (Optional)
            displayPage('./public/404.html', res, 404);
            break;
    }
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/ ...Press ctrl + c to close`);
});
