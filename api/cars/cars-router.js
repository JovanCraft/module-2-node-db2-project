// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router();


router.get('/', (req, res) => {

    Cars.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch()
})

router.get('/:id', (req, res) => {
    console.log('getById wired')
})

router.post('/', (req, res) => {
    console.log('create wired')
})





module.exports = router
