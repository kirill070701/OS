const express                   = require('express')
const app                       = express()
const mongodelete               = require('../function/mongodbDelete')

app.get("/delete", (req,res)=>{
    console.log(Number(req.query.number))
    mongodelete.server(Number(req.query.number))
    res.render("delete")
})

module.exports = app