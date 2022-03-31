let express = require('express')

let cityRouter = require('./SunlightInfo/router')

let router = new express.Router

router.use('/', cityRouter)

module.exports = router