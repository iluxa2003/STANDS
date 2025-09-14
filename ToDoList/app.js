const express = require('express');
const app = express();
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json());

const database = [
  {
    task: 'Cleaning',
    project: 'Home',
    date: '452133133',
    id: '0.26830729758056412',
  },
  {
    task: 'Night walk',
    project: 'Personal',
    date: '1331331334',
    id: '0.26830729758056413',
  },
  {
    task: 'Morning training',
    project: 'Gym',
    date: '13313313',
    id: '0.26830729758056415',
  },
];

app.post('/api', (request, response) => {
  console.log('I got a post request');

  if (
    request.body.task.length <= 50 &&
    typeof request.body.task === 'string' &&
    typeof request.body.project === 'string' &&
    // typeof request.body.data === 'number' &&
    typeof request.body.id === 'string'
  ) {
    database.push(request.body);
    response.json({
      status: 'success',
      database,
    });
  } else {
    response.json({
      status: 'failed',
      database,
    });
  }
});

app.get('/api', (request, response) => {
  response.json({
    status: 'success',
    database,
  });
});

app.delete('/api', (request, response) => {
  const index = database.findIndex((task) => task.id === request.body.id);
  if (index > -1) {
    database.splice(index, 1);
    response.json({
      status: 'success',
      database,
    });
  } else {
    response.json({
      status: 'failed',
      database,
    });
  }
});
