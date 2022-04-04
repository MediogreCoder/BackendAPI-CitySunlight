let express = require('express')
let controller = require('./controller')

let router = new express.Router()

router.get('/sunlight', controller.getAllCities)
router.post('/sunlight/:City', controller.createCity)
router.get('/sunlight/:Country', controller.getByCountry)
router.get('/sunlight/cityname/:City', controller.getByCityName)
//temperture still work in progress
router.get('/sunlight/:temperature', controller.getByTemperature)
router.get('/sunlight/:id', controller.getCityById)
router.put('/sunlight/update/:id', controller.updateCity)
router.delete('/sunlight/delete/:id', controller.deleteCity)

module.exports = router