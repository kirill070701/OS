const express                   = require('express')
const app                       = express()
const mongodb                   = require("../function/mongodbRead")
var bodyParser                  = require('body-parser')

app.use( bodyParser.urlencoded({ extended: true }));

app.get('/read', (req,res)=>{
    res.render('read')
    console.log(req.body)
})

app.post('/api/read', (req, res)=>{
    //let a = [req.body.name, req.body.family, req.body.patronymic, req.body.birth, req.body.position, req.body.experience]
    
    res.render('readPost')
    console.log(req.body)
})

/*app.post('/read/', (res,req)=>{
    console.log(req.body)
    res.render('readPost')
})*/
module.exports = app