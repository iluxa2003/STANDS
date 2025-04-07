// callback and HOF(High Order function) practice

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function display(prop) {
  console.log(prop);
}

sum(display, 1, 2); // 3
