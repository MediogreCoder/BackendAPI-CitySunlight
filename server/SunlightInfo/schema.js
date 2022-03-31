let mongoose = require('mongoose')

let schema = new mongoose.Schema({
  City: String,
  Country: String,
  Jan: Number,
  Feb: Number,
  Mar: Number,
  Apr: Number,
  May: Number,
  Jun: Number,
  Jul: Number,
  Aug: Number,
  Sep: Number,
  Oct: Number,
  Nov: Number,
  Dec: Number,
  Year: Number
})

module.exports = schema
