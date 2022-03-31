let express = require('express')
let controller = require('./controller')

let router = new express.Router()

router.get('/sunlight', controller.getAll)
router.post('/sunlight/:City/:Country', controller.create)
router.get('/sunlight/cityname/:City', controller.getByCity)
router.get('/sunlight/:id', controller.getById)
router.put('/sunlight/update/:id', controller.update)
router.delete('/sunlight/delete/:id', controller.delete)

module.exports = router