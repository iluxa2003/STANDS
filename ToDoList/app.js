const express = require('express');
const app = express();
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));

const database = [];

app.post('/api', (request, response) => {
  console.log(request);
  database.push(request.body);
  console.log(database);
  response.json({
    status: 'success',
    database,
  });
});

app.get('/api', (request, response) => {});
