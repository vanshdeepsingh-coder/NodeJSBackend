const app = require('./routes/router')
const port = 4000;

app.get('/', (req, res) => {
    res.write('<h1>New Server Home Page</h1>')
})

app.get('/about',(req,res)=>{
    res.write('<h1> New Server About Page</h1>')
})


app.listen((port), () => {
    console.log("New Server is Running at port: ",port);
})

module.exports = app;
  