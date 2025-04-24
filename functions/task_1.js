const obj1 = {
  name: 'First function',
  funcHelp() {
    return this;
  },
  arrowFunc: () => {
    return obj1.funcHelp();
  },
};

console.log(obj1.arrowFunc()); // calls obj :)

const obj2 = {
  name: 'Second function',
  funcHelp() {
    return this;
  },
  arrowFunc: (callback) => {
    return callback;
  },
};

console.log(obj2.arrowFunc(obj2.funcHelp())); // calls obj :)
var obj3 = {
  name: 'Third function',
  arrowFunc: () => {
    return this.obj3;
  },
};

console.log(obj3.arrowFunc()); // work only in non strict mode!!!!
