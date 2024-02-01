// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router();
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware')


router.get('/', (req, res, next) => {

    Cars.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', checkCarId, (req, res) => {

    res.json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {


    Cars.create(req.body)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err => {
        next(err)
    })
})





module.exports = router
