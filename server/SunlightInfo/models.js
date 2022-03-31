let mongoose = require('mongoose')

let schema = require('./schema')

let model = mongoose.model('cities', schema)

module.exports = model