let express = require('express')

let router = require('./router')

let app = express()

let jsonParsingMiddleware = express.json()
app.use(router)

module.exports = app