const express                   = require('express')
const app                       = express()
var bodyParser                  = require('body-parser')
const mongo                     =require('../function/mongodbChange')
const mongoPost                 = require('../function/mongodbChangePost')

app.use( bodyParser.urlencoded({ extended: true }));

app.get('/change', async(req, res)=>{
    var data = (await mongo.server(req.query.number))
    res.render('change', {number: req.query.number, data: data})
})

app.post('/change', (req, res)=>{
    let data = [req.body.id, req.body.name, req.body.family, req.body.patronymic, req.body.birth, req.body.position, req.body.experience]
    mongoPost.server(data)
    res.render('readPost')
    console.log(req.body.button)
})

module.exports = app