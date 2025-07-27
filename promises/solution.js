const myFunk = function () {
  try {
    return new Error('123');
  } catch (error) {
    console.log('2');
    return '123';
  } finally {
    console.log('finally');
  }
};

console.log(myFunk());
