// Call Apply and Bind Practice

//Call - usefull if you need touse 1 func with multiple objects with similar properties
const person = {
  fullname: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

const person1 = {
  firstname: 'John',
  lastname: 'Doe',
};

const person2 = {
  firstname: 'Bob',
  lastname: 'Glob',
};

console.log(person.fullname.call(person1));
console.log(person.fullname.call(person2));

//Apply
const obj1 = {
  name: 'John',
};

let greeting = function (a, b) {
  return `${a} ${this.name}. ${b}`;
};

console.log(greeting.apply(obj1, ['Hello', 'How are you? 1 func']));

const numbers = [5, 8, 2, 10, 3];
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // 10

//Bind
const obj2 = { name: 'John' };

let bound = greeting.bind(obj2);

console.log(bound('Hello', 'How are you? 2 func'));

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // First argument (a) is fixed to 2
// const double = multiply(null, 2); error

console.log(double(5)); // 10
console.log(double(10)); // 20
console.log(double); // function
console.log(double()); // Nan
