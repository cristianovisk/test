import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Coordinates extends BaseSchema {
  protected tableName = 'coordinates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('latitude', 150)
      table.string('longitude', 150)
      table.string('address', 250)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
