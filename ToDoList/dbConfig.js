const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'Blin123412341234',
  host: 'db',
  port: 5432,
  database: 'todo',
});

module.exports = pool;
