const express                   = require('express')
const app                       = express()
const mongodelete               = require('../function/mongodbDelete')

app.get("/delete", (req,res)=>{
    mongodelete.server(Number(req.query.number))
    res.render("delete")
})

module.exports = app