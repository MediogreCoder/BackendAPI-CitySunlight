let mongoose = require('mongoose')

let databaseConnection = 'mongodb://127.0.0.1:27017/Sunlight'
let mongooseConfig = { useNewUrlparser: true, UseUnifiedTopology: true }

mongoose.connect(databaseConnection, mongooseConfig)

//add error listeners
mongoose.connection.on('connected', ()=> console.log("connected"))