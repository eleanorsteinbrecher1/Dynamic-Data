const express = requires('express')
const app = express()
const port = ProcessingInstruction.env.port || 3000
//create some routes 
app.get('/home', (request, response)=>{
    response.type("text/html")
    response.send("Home Page")
})

app.get('/beaches', (request, response)=>{
    response.type("text/html")
    response.send("Miami Beaches")
})
app.get('/nightlife', (request, response)=>{
    response.type("text/html")
    response.send("Night life")
})

app.get('/about', (request, response)=>{
    response.type("text/html")
    response.send("About Miami")
})


//error handling goes after the actual routes 
//the default response is not found
app.use((request,response)=>{
response.type("text/html")
response.status(404)
response.send('404 not found')
})
//server error
app.use ((error, request, response,next)=>{
    console.log(error)
    response.type("text/html")
    response.status(500)
    response.send('500 server error') 
})

//start server 
app.listen(port, () => {
    console.log(`express is running on http://localhost:${port}`); // Fixed template literal syntax
    console.log('press Ctrl-C to terminate.');
});
