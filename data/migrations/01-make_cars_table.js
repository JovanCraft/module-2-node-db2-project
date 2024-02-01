exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', table => {
    table.increments();//can be left empty because ID is the default
    table.string('vin', 17).unique().notNullable()
    table.string('make', 130).notNullable()
    table.string('model', 130).notNullable()
    table.integer('mileage').unsigned().notNullable()
    table.string('title', 130)
    table.string('transmission', 130)

  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
