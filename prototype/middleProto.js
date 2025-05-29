const john = { age: 15 };

String = Object.create(john);

const str1 = Object.create(String);
const str2 = new String(); // error
