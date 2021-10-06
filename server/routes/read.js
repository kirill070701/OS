const express                   = require('express')
const app                       = express()
const mongodb                   = require("../function/mongodbRead")
var bodyParser                  = require('body-parser')

app.use( bodyParser.urlencoded({ extended: true }));

app.get('/read', (req,res)=>{
    res.render('read')
})

app.post('/read', (req, res)=>{
    let a = [req.body.name, req.body.family, req.body.patronymic, req.body.birth, req.body.position, req.body.experience, req.body.id]
    mongodb.server(a)
    res.render('readPost')
    console.log(req.body.button)
})

module.exports = app