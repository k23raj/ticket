const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const path = require('path')
const app = express()


app.use(express.json())
app.use(cors())
app.use('/',router)

//|| 3005
const port = process.env.PORT 
app.use(express.static(path.join(__dirname,"client/build")))
//for heroku routers
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})


app.listen(port, () => {
    console.log('listening to the port', port)
}) 