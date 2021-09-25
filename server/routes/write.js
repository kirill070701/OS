const express                   = require('express')
const app                       = express()
const mongodb                   = require("../function/mongodbWrite")

app.get('/write', async (req,res)=>{
    console.log((await mongodb.server())[0])
    var a = (await mongodb.server())
    res.render('write', {result:a})
})
module.exports = app