//Installation prerequisites
/*npm i express*/
/*npm i body-parser*/
/*npm i cors*/
/*npm i websocket*/

/*------------------------Application constants------------------------*/

const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req,res){

    //use response object to return a response to the user
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404);
            res.write('Error:File not found')
        }else{
            res.write(data)
        }
    })

    res.write('Hello Node');
    res.end();
})

// Set up our server so it will listen on the port we want it to
// The port will either respond or pass an error or nothing if it was successful
server.listen(port, function(error){

    //Chech if error exists
    if(error){
        console.log("Something went wrong",error)
    }else{
        console.log("Server is listening on port "+ port)
    }
})