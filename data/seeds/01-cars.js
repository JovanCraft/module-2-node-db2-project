// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'Toyota',
        model: 'Corolla',
        mileage: 32173,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '2222222222222',
        make: 'Nissan',
        model: 'GT-R',
        mileage: 5137,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '3333333333333',
        make: 'Chrysler',
        model: 'Saratoga',
        mileage: 197862,
        transmission: 'manual'
    },
    {
        vin: '4444444444444',
        make: 'Ford',
        model: 'Flex',
        mileage: 93019,
        title: 'salvage',
    },
    {
        vin: '5555555555555',
        make: 'Honda',
        model: 'Accord',
        mileage: 73211,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '6666666666666',
        make: 'Kia',
        model: 'Forte',
        mileage: 1218,
        title: 'clean',
        transmission: 'automatic'
    }
]


exports.seed = async function(knex) {

    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
