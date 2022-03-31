let model = require('./models')

let controller = {

  getAllCities(request, response) {
    model
      .find()
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on getAllCities()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },
  
  createCity(request, response) {
    model
      .create(request.body)
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on createCity()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },
  getCityById(request, response) {
    model
      .findById(request.params.id)
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on getCityById()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },
  getByCityName(request, response) {
    model
      .findOne({City: request.body })
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on getByCity()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },
  updateCity(request, response) {
    model
      .findByIdAndUpdate(request.params.id, request.body, {new: true})
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on updateCity()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },
  deleteCity(request, response) {
    model
      .findByIdAndRemove(request.params.id)
      .then(()=> response.json({success: true}))
      .catch(error=> {
        console.error("Error on deleteCity()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  }
}

module.exports = controller