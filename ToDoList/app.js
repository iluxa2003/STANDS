const express = require('express');
const app = express();
const log = require('./core/logger');
const { getFunk, postFunk, deleteFunk } = require('./core/dbCommands');
const createDatabasePool = require('./core/dbConfig');
const path = require('path');
const { schema } = require('./schemas/toDoTask');

const logsContainer = [];
let pool;
try {
  pool = createDatabasePool();
  app.listen(3000, () =>
    logsContainer.push(
      log('INFO', 'Server is up, listening at 3000', 'Server launch')
    )
  );
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json());
} catch (error) {
  logsContainer.push(log('ERROR', 'Server is down!'));
  console.log(error);
}

app.post('/api/toDoTable', async (request, response) => {
  try {
    schema.validate(request.body);
    const { task, project, date, id } = request.body;
    const newToDo = await postFunk(task, project, date, pool);
    logsContainer.push(log('INFO', 'New task created', 'POST'));
    response.json({
      status: 'success',
      database: newToDo.rows,
      logs: logsContainer,
    });
  } catch (error) {
    logsContainer.push(log('ERROR', `Something went wrong, ${error}`, 'POST'));
    response.status(500).json({
      success: false,
      message: 'Something went wrong on the server.',
    });
  }
});

app.get('/api/toDoTable', async (request, response) => {
  try {
    const getToDo = await getFunk(pool);
    response.json({
      status: 'success',
      database: getToDo.rows,
    });
  } catch (error) {
    logsContainer.push(
      log('ERROR', `Something went wrong, when sending info: ${error}`, 'GET')
    );
    response.status(500).json({
      success: false,
      message: 'Something went wrong on the server.',
    });
  }
});

app.delete('/api/toDoTable', async (request, response) => {
  try {
    await deleteFunk(request.body.id, pool);
    const getToDo = await getFunk(pool);
    logsContainer.push(log('INFO', 'Task deleted sucsessfully', 'DELETE'));
    response.json({
      status: 'success',
      database: getToDo.rows,
    });
  } catch (error) {
    logsContainer.push(
      log('ERROR', `Something went wrong, ${error}`, 'DELETE')
    );
    response.status(500).json({
      success: false,
      message: 'Something went wrong on the server.',
    });
  }
});
