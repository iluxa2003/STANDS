const Pool = require('pg').Pool;

function createDatabasePool() {
  return new Pool({
    user: 'postgres',
    password: 'Blin123412341234',
    host: 'db',
    port: 5432,
    database: 'todo',
  });
}
module.exports = createDatabasePool;
