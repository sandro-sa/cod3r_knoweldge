// 8 Update with your config settings.
module.exports = {
  client: 'postgres',
  version: '12.15',
  connection: {
    host: 'localhost',
    database: 'knowledge',
    user:     'postgres',
    password: '654321'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
  
};
