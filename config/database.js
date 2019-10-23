const mongoose = require('mongoose')

mongoose.Promise = global.Promise

//`mongodb://localhost:27017/ticket-master`
mongoose.connect( process.env.MONGOLAB_URI , {useNewUrlParser : true})
    .then(() => {
        console.log("Connected to Db")
    })
    .catch((err) => {
        console.log("Error connecting to Db", err)
    })

    module.exports = mongoose