let mongoose = require('mongoose')

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }

//sets name of db in mongo db
mongoose.connect('mongodb://127.0.0.1/Sunlight', mongooseConfig)

//requires raw json data
let sunlightData = require('../sunlightData.json')

//requires models
let sunlightModel = require('../models')

//deletes previous db and generate new db
sunlightModel.deleteMany({})
  .then(() => sunlightModel.create(sunlightData))
  .then(() => console.log("Done"))
  .catch(error => console.error(error))