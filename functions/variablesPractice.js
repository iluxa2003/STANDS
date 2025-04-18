// var let const practice
// var
console.log(s); // undefined bcs of special hoisting behavior

var x = 1;
var x = 2;
var x = 3;

console.log(x); // 3

var s = 0;
// const let

let color1 = 'green';
color1 = 'red';

console.log(color1); //red

const color2 = 'green';
// color2 = 'red'; error

// let


// error
// let c = 1
// function bar() {
//     let c = 3;
//     console.log(c);
// }
// bar();