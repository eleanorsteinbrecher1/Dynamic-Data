
const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 4000;

// funcions
//syntax of a function
const someName = (name) => {
    console.log("Your Name is " + name);
};

// Call the sample function
someName("Elli Steinbrecher");


const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    fs.readFile ('/public/home.html'(error,content)=>{
        res.end(content); 
        //need to handle erros first
        //if theres no errors,we can output the content
    })
    
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
