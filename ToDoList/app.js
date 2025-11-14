const express = require('express');
const app = express();
const createDatabasePool = require('./dbConfig');
const path = require('path');
const { schema } = require('./schemas/toDoTask');

let pool;
try {
  pool = createDatabasePool();
  app.listen(3000, () => console.log('Listening at 3000'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json());
} catch (error) {
  console.log(error);
}

app.post('/api', async (request, response) => {
  try {
    schema.validate(request.body);
    const { task, project, date, id } = request.body;
    const newToDo = await pool.query(
      'INSERT INTO todotable (task, project, date) VALUES ($1, $2, $3) RETURNING id, task, project, date',
      [task, project, date]
    );
    response.json({
      status: 'success',
      database: newToDo.rows,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'Something went wrong on the server.',
    });
  }
});

app.get('/api', async (request, response) => {
  try {
    const getToDo = await pool.query('SELECT * FROM todotable');
    response.json({
      status: 'success',
      database: getToDo.rows,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'Something went wrong on the server.',
    });
  }
});

app.delete('/api', async (request, response) => {
  try {
    await pool.query('DELETE FROM todotable WHERE id = $1', [request.body.id]);
    const getToDo = await pool.query('SELECT * FROM todotable');
    response.json({
      status: 'success',
      database: getToDo.rows,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'Something went wrong on the server.',
    });
  }
});
