fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log('Data:', data))
  .catch((err) => console.error('Error:', err))
  .finally(() => console.log('Request completed'));
