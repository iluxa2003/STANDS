// `function.name`, `function.length`, `arguments`, `caller`, `callee`

// function name
function smth() {}
console.log(smth.name);

function greet() {}
console.log(greet.name);

// function length
function add(a, b, c) {}
console.log(add.length); // 3

function add1(a = "1234") {}
console.log(add1.length); // 0

// caller
