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
    next({status: 400, message: `vin is missing`})
  } else if(!make){
    next({status: 400, message: `make is missing`})
  } else if(!model){
    next({status: 400, message: `model is missing`})
  } else if(!mileage){
    next({status: 400, message: `mileage is missing`})
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body
  const isValid = vinValidator.validate(vin)
  if(!isValid){
    next({ status: 400, message: `vin ${vin} is invalid`})
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
      next({ status: 400, message: `vin ${vin} already exists`})
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
