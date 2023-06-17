const {  db } = require('./.env')
// 8 Update with your config settings.
module.exports = {
  client: 'postgres',
  version: '12.15',
  connection: db,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
  
};
