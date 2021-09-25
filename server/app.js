const express                   = require('express')
const app                       = express()
const http                      = require('http').Server(app);
const io                        = require('socket.io')(http);
const port                      = process.env.port || 3000

const write                     = require('./routes/write')
const read                      = require('./routes/read')

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/views'))

app.use(write)
app.use(read)

app.get("/", (req, res)=>{
    res.render('index')
    
})

http.listen(port, ()=>{
    console.log("port- " + port)
})