let express = require('express')
let controller = require('./controller')

let router = new express.Router()

router.get('/sunlight', controller.getAllCities)
router.post('/sunlight/:City/:Country', controller.createCity)
router.get('/sunlight/cityname/:City', controller.getByCityName)
router.get('/sunlight/:id', controller.getCityById)
router.put('/sunlight/update/:id', controller.updateCity)
router.delete('/sunlight/delete/:id', controller.deleteCity)

module.exports = router