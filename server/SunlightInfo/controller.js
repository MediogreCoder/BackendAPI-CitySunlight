let model = require('./models')

let controller = {
//grabs all
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
//create with city name
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
  //get city by id
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
//get city with name
  getByCityName(request, response) {
    model
      .findOne({City: request.params.City })
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on getByCity()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },

//get country by name
  getByCountry(request, response) {
    model
      .findOne({Country: request.params.Country })
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on getByCountry()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },

 //get by temperature (work in progress)
  getByTemperature(request, response) {
    model
      .findOne({City: request.params.Temperature })
      .then(data=> response.json(data))
      .catch(error=> {
        console.error("Error on getByCity()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },

//update city by id
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
//delete city
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