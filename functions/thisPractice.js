// Call Apply and Bind Practice

//Call
const person = {
  fullname: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

const person1 = {
  firstname: 'John',
  lastname: 'Doe',
};

console.log(person.fullname.call(person1));

//Apply
const obj1 = {
  name: 'John',
};

let greeting = function (a, b) {
  return `${a} ${this.name}. ${b}`;
};

console.log(greeting.apply(obj1, ['Hello', 'How are you? 1 func']));

//Bind
const obj2 = { name: 'John' };

let bound = greeting.bind(obj2);

console.log(bound('Hello', 'How are you? 2 func'));
