const http = require('http');
const port = 4000;

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('<h1> Old Server Home Page</h1>')
    }
    else if(req.url === '/about'){
        res.end('<h1> Old Server About Page </h1>')
    }
})

server.listen(port,()=>{
    console.log('Old Server is Listening at port: ', port);
})
