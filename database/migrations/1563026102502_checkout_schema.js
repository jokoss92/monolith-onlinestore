'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CheckoutSchema extends Schema {
  up () {
    this.create('checkouts', (table) => {
      table.increments()
      table.integer('order_id').notNullable()
      table.string('shipment').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('checkouts')
  }
}

module.exports = CheckoutSchema
