let express = require('express')

let cityRouter = require('./product/router')

let router = new express.Router

router.use('/', cityRouter)

module.exports = router