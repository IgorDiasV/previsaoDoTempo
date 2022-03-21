const express = require('express')
const api = require('./routes/api')
const path = require('path')

const app = express()


app.use('/api',api)
app.use(express.static(path.join(__dirname,'/public')))


app.listen(3000,()=>{
    console.log("okay")
})