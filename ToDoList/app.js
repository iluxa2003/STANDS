const express = require('express');
const app = express();
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json());

const database = [];

app.post('/api', (request, response) => {
  console.log('I got a post request');
  database.push(request.body);
  console.log(database);
  response.json({
    status: 'success',
    database,
  });
});

app.get('/api', (request, response) => {
  console.log(request);
  response.json({
    status: 'success',
    database,
  });
});

// app.delete('/api', (request, response) => {
//   console.log(request);
//   response.json({
//     status: 'success',
//     database,
//   });
// });
