// function currying

function add1(a) {
  return function (b) {
    return function (c) {
      return a - b + c;
    };
  };
}

console.log(add1(1)(2)(3)); // 1 - 2 + 3 = 2
const default11 = add1(11); // a = 11
console.log(default11(6)(5)); // 11 - 6 + 5 = 10

const add2 = ({ a, b, c }) => a - b + c;

const defaultB = (b) => (args) => add2({ ...args, b });

console.log(defaultB(11)({ a: 5, c: 6 })); // b = 11 || 5 - 11 + 6 = 0
