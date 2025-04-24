// fucntion construction

const add = new Function('a', 'b', 'return a + b');
console.log(add(2, 3)); // 5

// dynamic functions
const operation = 'x + y';
const dynamicFunk = new Function('x', 'y', `return ${operation}`);

console.log(dynamicFunk(5, 3)); // 8

const person = {
  arrowFunk: () => {
    return this;
  },
  funk: new Function('x', 'y', 'z', 'return x + y + z'),
};

console.log(person.arrowFunk());
console.log(person.funk(1, 2, 3));
