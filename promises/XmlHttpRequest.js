const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();

const socket = new WebSocket('https://jsonplaceholder.typicode.com/todos/1');

socket.onopen = () => {
  socket.send('Hello Server!');
};

socket.onmessage = (event) => {
  console.log('Message from server', event.data);
};
