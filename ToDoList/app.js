const express = require('express');
const app = express();
// const cors = require('cors');
const pool = require('./dbConfig');
const { schema } = require('./shemas/toDoTask');

app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
// app.use(cors());
app.use(express.json());

app.post('/api', async (request, response) => {
  try {
    schema.validate(request.body);
    const { task, project, date, id } = request.body;
    const newToDo = await pool.query(
      'INSERT INTO todotable (task, project, date) VALUES ($1, $2, $3) RETURNING id, task, project, date',
      [task, project, date],
    );
    response.json({
      status: 'success',
      database: newToDo.rows,
    });
  } catch (error) {
    response.json({
      status: 'failed',
      error,
    });
  }
});

app.get('/api', async (request, response) => {
  const getToDo = await pool.query('SELECT * FROM ToDoTable');
  response.json({
    status: 'success',
    database: getToDo.rows,
  });
});

app.delete('/api', async (request, response) => {
  await pool.query('DELETE FROM ToDoTable WHERE id = $1', [request.body.id]);
  const getToDo = await pool.query('SELECT * FROM ToDoTable');
  response.json({
    status: 'success',
    database: getToDo.rows,
  });
});
