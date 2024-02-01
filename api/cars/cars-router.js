// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router();
const { checkCarId, checkCarPayload } = require('./cars-middleware')


router.get('/', (req, res) => {

    Cars.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch()
})

router.get('/:id', checkCarId, (req, res) => {

    res.json(req.car)
})

router.post('/', checkCarPayload, (req, res) => {

})





module.exports = router
