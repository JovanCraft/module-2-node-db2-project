const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  Cars.getById(req.params.id)
  .then(car => {
    if(!car){
      res.status(404).json({ message: `car with id ${req.params.id} is not found` })
    } else {
      req.car = car;
      next()
    }
  })
  .catch(err => {
    next(err)
  })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body
  if(!vin){
    //next({status: 400, message: `vin is missing`})
    res.status(400).json({ message: `vin is missing` })
  }
  if(!make){
    //next({status: 400, message: `make is missing`})
    res.status(400).json({ message: `make is missing` })
  }
  if(!model){
    //next({status: 400, message: `model is missing`})
    res.status(400).json({ message: `model is missing` })
  }
  if(!mileage){
    //next({status: 400, message: `mileage is missing`})
    res.status(400).json({ message: `mileage is missing` })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body
  const isValid = vinValidator.validate(vin)
  if(!isValid){
    //next({ status: 400, message: `vin ${vin} is invalid`})
    res.status(400).json({ message: `vin ${vin} is invalid` })
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const { vin } = req.body
    const existingCar = await Cars.getByVin(vin)
    if(existingCar){
      //next({ status: 400, message: `vin ${vin} already exists`})
      res.status(400).json({ message: `vin ${vin} already exists` })
    } else {
      next()
    }
  } catch(err){
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}

//So apparently you can only use a next() to finish of the middleware. when I used res.json() in my if statement it worked!! FINISHED!
