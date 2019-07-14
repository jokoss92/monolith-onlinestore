'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourierSchema extends Schema {
  up () {
    this.create('couriers', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('jarak', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('couriers')
  }
}

module.exports = CourierSchema
